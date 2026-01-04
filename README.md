# Mindmark - Obsidian Mind Map Plugin

A powerful Obsidian plugin that renders Markdown lists and multi-level headings into interactive mind maps.

![Render Example](assets/渲染图.png)

[English](#english) | [中文](#中文)

---

## English

### ✨ Features

#### 🎨 Dual Render Modes
- **Outline View**: Horizontal left-to-right layout, perfect for hierarchical structures
- **Radial Mind Map**: Symmetrical left-right layout, ideal for central themes

#### 🎨 Rich Theme System
- **13 Preset Themes**: Default, Dark, Darcula, Dracula, Monokai, Solarized Dark/Light, Ocean, Forest, Sunset, Lavender, Mint, Rose
- **Custom Themes**: Create and save your own color schemes
- **5 Color Configurations**: Canvas background, font color, node background, line color, connection color
- **Real-time Preview**: Color changes apply immediately to all mind maps

#### 📝 Smart Content Recognition
- **Multi-level Heading Mode**: Automatically recognizes `##`, `###` etc. Headings, with content below as notes
- **List Mode**: Supports indented lists starting with `-` or `*`, with `#` as root heading

#### 🎯 Interactive Experience
- **Click to Expand/Collapse**: Click nodes or circles to expand or collapse child nodes
- **Notes Display**: Supports Markdown-formatted notes, click 📝 icon to view in right panel
- **Zoom Controls**:
  - Zoom percentage selector (25%, 50%, 75%, 100%, 125%, 150%, 200%, 300%, 400%)
  - +/- button zoom
  - Mouse wheel zoom (configurable)
  - Trackpad pinch zoom (macOS) and touch screen pinch zoom (configurable)
  - Reset zoom button
- **Pan Support**: Mouse drag to pan the canvas
- **Fullscreen Mode**: Click fullscreen button for immersive viewing, theme color auto-syncs
- **One-click Copy**: Click 📷 button to copy mind map as high-definition PNG image
- **Expand/Collapse All**: One-click expand (⊞) or collapse (⊟) all nodes

#### 🎨 Visual Design
- **Professional Color Schemes**: Multiple themes for different scenarios
- **Adaptive Layout**: Auto-center display, supports any size
- **Smooth Animations**: Panel slide-in/out, smooth operations
- **Preview Mode Optimization**: Correct display in preview mode, no horizontal scrolling issues

### 📦 Installation

#### Manual Installation
1. Download and extract the plugin
2. Rename folder to `obsidian-mindmap`
3. Copy to Obsidian plugins directory:
   - **macOS**: `~/Library/Application Support/obsidian/plugins/`
   - **Windows**: `%APPDATA%\obsidian/plugins/`
   - **Linux**: `~/.config/obsidian/plugins/`
4. Enable "Mindmark" in Obsidian Settings → Community Plugins

#### Development Installation
```bash
git clone https://github.com/iFaceless/obsidian-mindmap.git
cd obsidian-mindmap
npm install
npm run build
```

### 🚀 Usage

#### Basic Usage

Create a code block in Obsidian notes using `mindmap` as the language identifier:

````markdown
```mindmap
- Core Architecture
  - Model (Brain)
    - Selection Principle: Business-driven
    - Multi-model Strategy
  - Tools (Arms)
    - Retrieve Real-world Information
    - Execute Actions
  - Orchestration Layer
    - Planning
    - Memory Management
```
````

#### Multi-level Heading Mode

Use Markdown multi-level headings to create mind maps. Content below headings is automatically recognized as notes:

````markdown
```mindmap
## Technology
### Fundamentals
Fundamentals are a **long-term investment**. Short-term gains may not be obvious, but they determine your career ceiling.

#### Algorithms
Problem-solving strategies and insights:
- **LeetCode Hot 100** is the most core question bank, prioritize it
- Common question types: `*` indicates high frequency
  - 1. Linked List: `Reverse Linked List`, `Linked List Cycle`, `Merge K Sorted Lists`
  - 2. Binary Tree: `Level Order Traversal`, `Path Sum`, `Lowest Common Ancestor`
  - 3. Dynamic Programming: `Knapsack Problem`, `Longest Increasing Subsequence`, `Edit Distance`
  - 4. DFS/BFS: `Number of Islands`, `Course Schedule`, `Matrix Shortest Path`
- Interview tips: **Explain approach first, then write code, finally analyze complexity**
```
````

#### List Mode with Root Heading

Use `#` heading as root node, child nodes use `-` or `*`:

````markdown
```mindmap
# Day_1_v4

## Introduction
- Definition: AI system combining model, tools, orchestration layer
- Goal: Transition from predictive AI to autonomous agents

## Core Architecture
- Model (Brain)
  - Selection Principle: Business-driven
  - Multi-model Strategy: Choose different models based on task characteristics
- Tools (Arms)
  - Function Categories: Retrieve real-world information, execute actions
- Orchestration Layer (Neural Network)
  - Role: Planning, memory management, decision execution
```
````

### 🎮 Interactive Operations

| Operation | Function |
|-----------|----------|
| **Click node text** | Expand or collapse child nodes |
| **Click hollow circle** | Expand or collapse child nodes |
| **Click 📝 icon** | Display notes in right panel |
| **Click canvas blank area** | Hide notes panel |
| **Mouse drag** | Pan canvas |
| **Mouse wheel** | Zoom canvas (enable in settings) |
| **Trackpad pinch** | Zoom canvas (macOS, enable in settings) |
| **Touch screen pinch** | Zoom canvas (enable in settings) |
| **Click +/- buttons** | Zoom in/out |
| **Select zoom level** | Choose common zoom levels from dropdown |
| **Click 🎯 button** | Reset zoom and position |
| **Click 📷 button** | Copy as PNG image |
| **Click ⛶ button** | Toggle fullscreen mode |
| **Click ⊞ button** | Expand all nodes |
| **Click ⊟ button** | Collapse all nodes |
| **Dropdown selection** | Switch render mode |

### ⚙️ Settings

#### Theme Settings
- **Theme**: Select preset theme or Custom mode
- **Save current settings as custom theme**: Save current color settings as custom theme (only in Custom mode)
- **Delete custom theme**: Delete custom theme (only in Custom mode)

#### Color Settings (Custom mode only)
- **Canvas background color**: Canvas background color
- **Font color**: Node text color
- **Node background color**: Node background color
- **Line color**: Node border and outline color
- **Connection color**: Connection line color between nodes

#### General Settings
- **Default render mode**: Select default render mode (Outline View / Radial Mind Map)
- **Enable mouse wheel zoom**: Enable mouse wheel zoom (default: disabled)
- **Enable pinch zoom**: Enable trackpad pinch zoom and touch screen pinch zoom (default: disabled)
- **Note panel width**: Notes panel width (200-800px)

#### Preset Themes

| Theme Name | Style | Use Case |
|------------|-------|----------|
| Default | White background, black text, purple lines | General purpose |
| Dark | Dark theme | Dark mode |
| Darcula | IntelliJ IDEA classic dark | Developers |
| Dracula | Popular dark theme | Developers |
| Monokai | Classic code editor theme | Developers |
| Solarized Dark | Solarized dark | Developers |
| Solarized Light | Solarized light | Developers |
| Ocean | Ocean blue tones | Fresh style |
| Forest | Forest green tones | Natural style |
| Sunset | Sunset orange-red tones | Warm style |
| Lavender | Lavender purple tones | Elegant style |
| Mint | Mint cyan tones | Fresh style |
| Rose | Rose pink tones | Soft style |

### 📸 Render Examples

#### Basic Rendering
![Render Example](assets/渲染图.png)

#### Settings Interface
![Settings](assets/settings.png)

#### Fullscreen Mode with Notes
![Fullscreen + Notes](assets/fullscreen-with-notes.png)

### 💡 Tips

1. **Quick Mode Switch**: Use dropdown menu in control panel to quickly switch render modes
2. **Theme Switching**: Choose appropriate theme for your scenario, or create custom theme
3. **Precise Zoom**: Use zoom percentage selector to quickly jump to common zoom levels
4. **Fullscreen Viewing**: Click fullscreen button for immersive viewing, theme color auto-syncs
5. **Export Image**: Click 📷 button to copy mind map as HD PNG, paste directly into documents
6. **Notes Management**: In multi-level heading mode, all content below headings becomes notes, supports full Markdown format
7. **Smart Recognition**: Plugin automatically recognizes content type, no manual mode selection needed
8. **Custom Themes**: Adjust colors and save as custom theme for future use
9. **Expand/Collapse All**: Use ⊞ to expand all nodes or ⊟ to collapse all nodes for quick navigation

### 🔧 Development

```bash
# Install dependencies
npm install

# Development mode (auto-rebuild)
npm run dev

# Production build
npm run build
```

### 📝 Changelog

#### v1.2.0
- ✨ Add expand all (⊞) and collapse all (⊟) buttons to control panel
- ✨ Add trackpad pinch zoom support for macOS (wheel + ctrlKey)
- ✨ Add Safari gesture event support for pinch zoom
- ✨ Add touch screen pinch zoom support
- 🐛 Fix extra line segments on leaf node rectangles
- 🎨 Optimize connection line endpoints for consistent 3px spacing
- 🎨 Unify circle radius to 5 for both left and right sides

#### v1.1.0
- ✨ Add complete theme system with 13 preset themes
- ✨ Support custom theme creation, saving, and deletion
- ✨ Add zoom percentage selector (25%-400%)
- ✨ Add fullscreen mode with theme color auto-sync
- 🐛 Fix notes panel display in preview mode
- 🐛 Fix canvas width overflow in preview mode
- 🐛 Fix background color flicker when toggling fullscreen
- 🎨 Rename settings page to "Mindmark Settings"

#### v1.0.0
- ✨ Support two render modes: Outline View and Radial Mind Map
- ✨ Smart content recognition: multi-level heading mode and list mode
- ✨ Right-side notes panel with Markdown rendering
- ✨ One-click copy as HD PNG image
- ✨ Click node to expand/collapse
- ✨ Zoom and pan support
- 🎨 Professional visual design

### 📄 License

MIT License

### 🤝 Contributing

Issues and Pull Requests are welcome!

### 📧 Contact

- GitHub: [iFaceless/obsidian-mindmap](https://github.com/iFaceless/obsidian-mindmap)

---

## 中文

### ✨ 特色功能

#### 🎨 两种渲染模式
- **Outline View（大纲视图）**：从左到右的水平布局，适合展示层级结构
- **Radial Mind Map（放射状思维导图）**：左右对称的放射布局，适合展示中心主题

#### 🎨 丰富的主题系统
- **13 种预设主题**：包括 Default、Dark、Darcula、Dracula、Monokai、Solarized Dark/Light、Ocean、Forest、Sunset、Lavender、Mint、Rose
- **自定义主题**：支持创建和保存个人配色方案
- **5 种颜色配置**：画布背景色、字体颜色、节点背景色、线框颜色、连线颜色
- **实时预览**：修改颜色后立即应用到所有思维导图

#### 📝 智能内容识别
- **多级标题模式**：自动识别 `##`、`###` 等多级标题，标题下的内容作为备注
- **列表模式**：支持 `-` 或 `*` 开头的缩进列表，`#` 作为根标题

#### 🎯 交互体验
- **点击展开/折叠**：点击节点或圆圈即可展开或折叠子节点
- **备注展示**：支持 Markdown 格式的备注内容，点击 📝 图标在右侧面板查看
- **缩放控制**：
  - 缩放百分比选择器（25%、50%、75%、100%、125%、150%、200%、300%、400%）
  - +/- 按钮缩放
  - 鼠标滚轮缩放（可配置）
  - 触控板捏合缩放（macOS，可配置）
  - 触摸屏双指缩放（可配置）
  - 重置缩放按钮
- **平移支持**：鼠标拖拽平移画布
- **全屏模式**：点击全屏按钮进入沉浸式查看体验，主题色自动同步
- **一键复制**：点击 📷 按钮将思维导图复制为高清 PNG 图片
- **全部展开/折叠**：一键展开（⊞）或折叠（⊟）所有节点

#### 🎨 视觉设计
- **专业配色**：多种主题可选，适应不同场景
- **自适应布局**：自动居中显示，支持任意尺寸
- **平滑动画**：面板滑入滑出，操作流畅
- **预览模式优化**：在预览模式下正确显示，无横向滚动问题

### 📦 安装方法

#### 手动安装
1. 下载插件并解压
2. 将文件夹重命名为 `obsidian-mindmap`
3. 复制到 Obsidian 插件目录：
   - **macOS**: `~/Library/Application Support/obsidian/plugins/`
   - **Windows**: `%APPDATA%\obsidian/plugins/`
   - **Linux**: `~/.config/obsidian/plugins/`
4. 在 Obsidian 设置 → 第三方插件中启用 "Mindmark"

#### 开发安装
```bash
git clone https://github.com/iFaceless/obsidian-mindmap.git
cd obsidian-mindmap
npm install
npm run build
```

### 🚀 使用方法

#### 基础用法

在 Obsidian 笔记中创建代码块，使用 `mindmap` 作为语言标识符：

````markdown
```mindmap
- 核心架构
  - Model（大脑）
    - 选择原则：业务需求导向
    - 多模型策略
  - Tools（手臂）
    - 检索现实信息
    - 执行动作
  - Orchestration Layer
    - 规划
    - 记忆管理
```
````

#### 多级标题模式

使用 Markdown 多级标题创建思维导图，标题下的内容会自动识别为备注：

````markdown
```mindmap
## 技术
### 基础知识
基础知识是**长期主义**的投资，短期内看不到明显收益，但决定了职业天花板。

#### 算法
刷题策略与心得：
- **LeetCode Hot 100** 是最核心的题库，优先搞定
- 常见题型：`*` 表示高频
  - 1. 链表：`反转链表`、`环形链表`、`合并 K 个有序链表`
  - 2. 二叉树：`层序遍历`、`路径总和`、`最近公共祖先`
  - 3. 动态规划：`背包问题`、`最长递增子序列`、`编辑距离`
  - 4. DFS/BFS：`岛屿数量`、`课程表`、`矩阵最短路径`
- 面试技巧：**先讲思路，再写代码，最后分析复杂度**
```
````

#### 列表模式（带根标题）

使用 `#` 标题后的内容作为根节点，子节点使用 `-` 或 `*`：

````markdown
```mindmap
# Day_1_v4

## 介绍
- 定义：结合模型、工具、orchestration层的AI系统
- 目标：从预测性AI过渡至自主代理

## 核心架构
- Model（大脑）
  - 选择原则：业务需求导向
  - 多模型策略：根据任务特点选用不同模型
- Tools（手臂）
  - 功能分类：检索现实信息、执行动作
- Orchestration Layer（神经网络）
  - 角色：规划、记忆管理、决策执行
```
````

### 🎮 交互操作

| 操作 | 功能 |
|------|------|
| **点击节点文字** | 展开或折叠子节点 |
| **点击空心圆** | 展开或折叠子节点 |
| **点击 📝 图标** | 在右侧面板显示备注内容 |
| **点击画布空白处** | 隐藏备注面板 |
| **鼠标拖拽** | 平移画布 |
| **鼠标滚轮** | 缩放画布（需在设置中启用） |
| **触控板捏合** | 缩放画布（macOS，需在设置中启用） |
| **触摸屏双指** | 缩放画布（需在设置中启用） |
| **点击 +/- 按钮** | 放大/缩小 |
| **选择缩放比例** | 从下拉菜单选择常用缩放比例 |
| **点击 🎯 按钮** | 重置缩放和位置 |
| **点击 📷 按钮** | 复制为 PNG 图片 |
| **点击 ⛶ 按钮** | 切换全屏模式 |
| **点击 ⊞ 按钮** | 全部展开节点 |
| **点击 ⊟ 按钮** | 全部折叠节点 |
| **下拉选择** | 切换渲染模式 |

### ⚙️ 设置选项

#### 主题设置
- **Theme**：选择预设主题或 Custom 自定义模式
- **Save current settings as custom theme**：保存当前颜色设置为自定义主题（仅在 Custom 模式下显示）
- **Delete custom theme**：删除自定义主题（仅在 Custom 模式下显示）

#### 颜色设置（仅在 Custom 模式下显示）
- **Canvas background color**：画布背景色
- **Font color**：节点文字颜色
- **Node background color**：节点背景色
- **Line color**：节点边框和轮廓颜色
- **Connection color**：节点间连线颜色

#### 通用设置
- **Default render mode**：选择默认渲染模式（Outline View / Radial Mind Map）
- **Enable mouse wheel zoom**：启用鼠标滚轮缩放（默认关闭）
- **Enable pinch zoom**：启用触控板捏合缩放和触摸屏双指缩放（默认关闭）
- **Note panel width**：备注面板宽度（200-800px）

#### 预设主题列表

| 主题名称 | 风格 | 适用场景 |
|---------|------|---------|
| Default | 白底黑字，紫色线条 | 通用场景 |
| Dark | 深色主题 | 深色模式 |
| Darcula | IntelliJ IDEA 经典深色 | 开发者 |
| Dracula | 流行深色主题 | 开发者 |
| Monokai | 经典代码编辑器主题 | 开发者 |
| Solarized Dark | Solarized 深色 | 开发者 |
| Solarized Light | Solarized 浅色 | 开发者 |
| Ocean | 海洋蓝色系 | 清新风格 |
| Forest | 森林绿色系 | 自然风格 |
| Sunset | 日落橙红色系 | 温暖风格 |
| Lavender | 薰衣草紫色系 | 优雅风格 |
| Mint | 薄荷青色系 | 清新风格 |
| Rose | 玫瑰粉色系 | 柔和风格 |

### 📸 渲染效果

#### 基础渲染
![渲染图示例](assets/渲染图.png)

#### 设置界面
![设置界面](assets/settings.png)

#### 全屏模式与备注面板
![全屏模式 + 备注](assets/fullscreen-with-notes.png)

### 💡 使用技巧

1. **快速切换模式**：使用控制面板的下拉菜单快速切换渲染模式
2. **主题切换**：根据场景选择合适的主题，或创建自定义主题
3. **精确缩放**：使用缩放百分比选择器快速跳转到常用缩放比例
4. **全屏查看**：点击全屏按钮进入沉浸式查看模式，主题色自动同步
5. **导出图片**：点击 📷 按钮将思维导图复制为高清 PNG，可直接粘贴到文档中
6. **备注管理**：在多级标题模式下，标题下的所有内容都会作为备注，支持完整的 Markdown 格式
7. **智能识别**：插件会自动识别内容类型，无需手动选择模式
8. **自定义主题**：调整颜色后保存为自定义主题，方便后续使用
9. **快速导航**：使用 ⊞ 全部展开或 ⊟ 全部折叠，快速浏览或整理思维导图

### 🔧 开发

```bash
# 安装依赖
npm install

# 开发模式（自动重新构建）
npm run dev

# 生产构建
npm run build
```

### 📝 更新日志

#### v1.2.0
- ✨ 添加全部展开（⊞）和全部折叠（⊟）按钮到控制面板
- ✨ 添加 macOS 触控板捏合缩放支持（wheel + ctrlKey）
- ✨ 添加 Safari gesture 事件捏合缩放支持
- ✨ 添加触摸屏双指捏合缩放支持
- 🐛 修复叶子节点矩形框右侧多余线段问题
- 🎨 优化连接线终点，保持一致的 3px 间距
- 🎨 统一左右两侧圆圈半径为 5

#### v1.1.0
- ✨ 添加完整的主题系统，支持 13 种预设主题
- ✨ 支持自定义主题创建、保存和删除
- ✨ 添加缩放百分比选择器（25%-400%）
- ✨ 添加全屏模式，主题色自动同步
- 🐛 修复预览模式下备注面板显示问题
- 🐛 修复预览模式下画布宽度溢出问题
- 🐛 修复全屏模式切换时的背景色闪烁问题
- 🎨 将设置页面重命名为 "Mindmark Settings"

#### v1.0.0
- ✨ 支持两种渲染模式：Outline View 和 Radial Mind Map
- ✨ 智能内容识别：多级标题模式和列表模式
- ✨ 右侧备注面板，支持 Markdown 渲染
- ✨ 一键复制为高清 PNG 图片
- ✨ 点击节点展开/折叠功能
- ✨ 缩放和平移支持
- 🎨 专业的视觉设计

### 📄 许可证

MIT License

### 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 📧 联系方式

- GitHub: [iFaceless/obsidian-mindmap](https://github.com/iFaceless/obsidian-mindmap)