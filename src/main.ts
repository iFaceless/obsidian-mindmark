import { Plugin, MarkdownPostProcessorContext, MarkdownRenderChild } from 'obsidian';

interface MindMapNode {
	id: string;
	text: string;
	children: MindMapNode[];
	collapsed: boolean;
}

export default class MindMapPlugin extends Plugin {
	async onload() {
		this.registerMarkdownCodeBlockProcessor('obmind', (source, el, ctx) => {
			const mindMap = new MindMapRenderer(source, el, ctx);
			ctx.addChild(mindMap);
		});

		console.log('Mind Map Plugin loaded');
	}

	onunload() {
		console.log('Mind Map Plugin unloaded');
	}
}

class MindMapRenderer extends MarkdownRenderChild {
	private source: string;
	private container: HTMLElement;
	private root: MindMapNode | null = null;

	constructor(source: string, container: HTMLElement, ctx: MarkdownPostProcessorContext) {
		super(container);
		this.source = source;
		this.container = container;
	}

	onload() {
		this.render();
	}

	private parseMarkdownList(text: string): MindMapNode | null {
		const lines = text.split('\n').filter(line => line.trim());
		if (lines.length === 0) return null;

		const root: MindMapNode = {
			id: 'root',
			text: 'Root',
			children: [],
			collapsed: false
		};

		const stack: { node: MindMapNode; level: number }[] = [{ node: root, level: -1 }];

		for (const line of lines) {
			const trimmed = line.trim();
			if (!trimmed) continue;

			// 计算缩进级别
			const leadingSpaces = line.search(/\S|$/);
			const level = Math.floor(leadingSpaces / 2); // 假设每级缩进2个空格

			// 移除列表标记（- 或 *）
			const text = trimmed.replace(/^[-*]\s*/, '').trim();

			const newNode: MindMapNode = {
				id: `node-${Math.random().toString(36).substr(2, 9)}`,
				text: text,
				children: [],
				collapsed: false
			};

			// 找到正确的父节点
			while (stack.length > 1 && stack[stack.length - 1].level >= level) {
				stack.pop();
			}

			const parent = stack[stack.length - 1].node;
			parent.children.push(newNode);
			stack.push({ node: newNode, level });
		}

		// 如果只有一个顶层节点，将其作为根节点
		if (root.children.length === 1) {
			return root.children[0];
		}

		return root;
	}

	private render() {
		this.root = this.parseMarkdownList(this.source);
		if (!this.root) {
			this.container.innerHTML = '<p>No content to render</p>';
			return;
		}

		const svg = this.container.createSvg('svg');
		svg.style.width = '100%';
		svg.style.height = '600px';
		svg.style.overflow = 'auto';

		const g = svg.createSvg('g');

		this.renderNode(this.root, g, 50, 300, 0);
		this.centerTree(g, svg);
	}

	private renderNode(
		node: MindMapNode,
		parent: SVGElement,
		x: number,
		y: number,
		depth: number
	): { x: number; y: number } {
		const nodeGroup = parent.createSvg('g');
		nodeGroup.setAttribute('class', 'mindmap-node');
		nodeGroup.setAttribute('data-id', node.id);

		// 节点圆形（参考示例图片的空心圆样式）
		const circle = nodeGroup.createSvg('circle');
		const nodeRadius = 6;
		circle.setAttribute('cx', x.toString());
		circle.setAttribute('cy', y.toString());
		circle.setAttribute('r', nodeRadius.toString());
		circle.setAttribute('fill', 'white');
		circle.setAttribute('stroke', '#4F46E5');
		circle.setAttribute('stroke-width', '2');
		circle.style.cursor = 'pointer';

		// 节点文本（显示在节点右侧，无背景框）
		const text = nodeGroup.createSvg('text');
		text.setAttribute('x', (x + 15).toString());
		text.setAttribute('y', (y + 5).toString());
		text.setAttribute('fill', '#000000');
		text.setAttribute('font-size', depth === 0 ? '16' : '14');
		text.setAttribute('font-family', 'Segoe UI, Arial, sans-serif');
		text.setAttribute('font-weight', depth === 0 ? 'bold' : 'normal');
		text.style.cursor = 'pointer';
		text.textContent = node.text;

		// 点击事件
		const toggleNode = () => {
			if (node.children.length > 0) {
				node.collapsed = !node.collapsed;
				this.refresh();
			}
		};

		circle.addEventListener('click', toggleNode);
		text.addEventListener('click', toggleNode);

		// 如果有子节点且未折叠，渲染子节点
		if (node.children.length > 0 && !node.collapsed) {
			const childX = x + this.calculateTextWidth(node.text) + 50;
			const totalHeight = this.calculateTreeHeight(node);
			let currentY = y - (totalHeight / 2);

			// 绘制连接线和子节点
			for (const child of node.children) {
				const childHeight = this.calculateTreeHeight(child);
				const childY = currentY + (childHeight / 2);

				// 使用贝塞尔曲线连接节点（参考示例图片的曲线样式）
				const line = parent.createSvg('path');
				const startX = x + nodeRadius;
				const startY = y;
				const endX = childX - nodeRadius;
				const endY = childY;
				const controlX1 = startX + (endX - startX) * 0.5;
				const controlY1 = startY;
				const controlX2 = startX + (endX - startX) * 0.5;
				const controlY2 = endY;

				line.setAttribute('d', `M${startX},${startY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`);
				line.setAttribute('stroke', '#4F46E5');
				line.setAttribute('stroke-width', '1.5');
				line.setAttribute('fill', 'none');

				// 渲染子节点
				this.renderNode(child, parent, childX, childY, depth + 1);

				currentY += childHeight + 20; // 子节点之间的垂直间距
			}
		} else if (node.children.length > 0 && node.collapsed) {
			// 显示折叠指示器（橙色圆圈）
			const indicator = nodeGroup.createSvg('circle');
			indicator.setAttribute('cx', (x + nodeRadius + 10).toString());
			indicator.setAttribute('cy', y.toString());
			indicator.setAttribute('r', '8');
			indicator.setAttribute('fill', '#FF9800');
			indicator.setAttribute('stroke', '#4F46E5');
			indicator.setAttribute('stroke-width', '1.5');
			indicator.style.cursor = 'pointer';

			const plusText = nodeGroup.createSvg('text');
			plusText.setAttribute('x', (x + nodeRadius + 6).toString());
			plusText.setAttribute('y', (y + 4).toString());
			plusText.setAttribute('fill', 'white');
			plusText.setAttribute('font-size', '12');
			plusText.setAttribute('font-weight', 'bold');
			plusText.setAttribute('font-family', 'Segoe UI, Arial, sans-serif');
			plusText.textContent = '+';

			indicator.addEventListener('click', () => {
				node.collapsed = false;
				this.refresh();
			});

			plusText.addEventListener('click', () => {
				node.collapsed = false;
				this.refresh();
			});
		}

		return { x, y };
	}

	private calculateTextWidth(text: string): number {
		// 估算文本宽度（每个字符约8像素）
		return text.length * 8 + 20;
	}

	private calculateTreeHeight(node: MindMapNode): number {
		if (node.children.length === 0 || node.collapsed) {
			return 40; // 单个节点的高度
		}

		let totalHeight = 0;
		for (const child of node.children) {
			totalHeight += this.calculateTreeHeight(child) + 20; // 子节点之间的间距
		}

		return totalHeight - 20; // 减去最后一个间距
	}

	private calculateTreeWidth(node: MindMapNode): number {
		if (node.children.length === 0 || node.collapsed) {
			return this.calculateTextWidth(node.text) + 30;
		}

		let maxWidth = this.calculateTextWidth(node.text) + 30;
		for (const child of node.children) {
			const childWidth = this.calculateTreeWidth(child);
			maxWidth = Math.max(maxWidth, childWidth + 100); // 子节点水平偏移
		}

		return maxWidth;
	}

	private centerTree(g: SVGElement, svg: SVGElement) {
		const bbox = g.getBBox();
		const svgWidth = svg.clientWidth || 800;
		const svgHeight = svg.clientHeight || 600;

		// 计算缩放比例，优先适应宽度
		const scaleX = Math.min(1, (svgWidth - 60) / bbox.width);
		const scaleY = Math.min(1, (svgHeight - 40) / bbox.height);
		const scale = Math.min(scaleX, scaleY, 1); // 不放大，只缩小

		// 计算居中位置
		const translateX = 30 - bbox.x * scale;
		const translateY = (svgHeight - bbox.height * scale) / 2 - bbox.y * scale;

		g.setAttribute('transform', `translate(${translateX}, ${translateY}) scale(${scale})`);
	}

	private refresh() {
		this.container.innerHTML = '';
		this.render();
	}
}
