# Short Studio Web

一个专业的短剧工作室网站，采用Apple UI设计风格，展示我们的创意作品和官方演示。

## 🌟 特性

- 🎨 **Apple UI设计风格** - 采用苹果公司的设计语言，简洁优雅
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🌐 **多语言支持** - 支持中英文切换
- 🎬 **视频展示** - 官方演示视频，采用3D效果和精美动画
- ⚡ **现代技术栈** - 纯HTML、CSS和JavaScript构建

## 📁 项目结构

```
short-studio-web/
├── index.html          # 主页面
├── favicon.ico         # 网站图标
├── favicon.png         # PNG格式图标
├── favicon.svg         # SVG格式图标
└── README.md           # 项目说明文档
```

## 🚀 快速开始

### 本地运行

1. 克隆项目到本地
```bash
git clone https://github.com/IIIIQIIII/short-studio-web.git
cd short-studio-web
```

2. 打开 `index.html` 文件
```bash
# 使用浏览器打开
open index.html
```

### 部署到GitHub Pages

本项目可以直接部署到GitHub Pages：

1. 确保所有文件都在 `main` 分支
2. 在GitHub仓库设置中启用GitHub Pages
3. 选择 `main` 分支作为源
4. 访问提供的URL

## 🎯 主要功能

### 1. 导航栏
- 固定在页面顶部
- 支持毛玻璃效果
- 中英文语言切换
- 响应式设计

### 2. 主页区域
- 全屏英雄区域
- 渐变背景效果
- 动态文字效果
- 行动号召按钮

### 3. 视频展示
- YouTube视频嵌入
- 3D旋转效果
- 悬停动画
- Apple风格阴影

### 4. 功能特色
- 专业制作工具
- 快速工作流
- 目标受众分析

## 🎨 设计特色

### Apple UI设计风格
- **配色方案**: 使用Apple标准的黑白灰配色
- **字体**: 采用Apple系统字体栈
- **圆角**: 大圆角设计元素
- **阴影**: 多层阴影系统
- **动画**: 平滑的过渡效果

### 响应式设计
- **移动优先**: 从小屏幕开始设计
- **断点**: 768px和1200px
- **弹性布局**: 使用Flexbox和Grid
- **媒体查询**: 针对不同设备优化

## 🔧 技术实现

### HTML结构
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Short Studio</title>
    <!-- 图标和样式 -->
</head>
<body>
    <!-- 导航栏 -->
    <nav>...</nav>
    
    <!-- 主页区域 -->
    <section class="hero">...</section>
    
    <!-- 视频展示 -->
    <section class="video-showcase">...</section>
    
    <!-- 功能特色 -->
    <section class="features">...</section>
    
    <!-- 页脚 -->
    <footer>...</footer>
</body>
</html>
```

### CSS特性
- **CSS变量**: 主题色彩管理
- **Flexbox**: 弹性布局
- **Grid**: 网格布局系统
- **动画**: Keyframes动画
- **滤镜**: 毛玻璃效果

### JavaScript功能
- **语言切换**: 中英文切换
- **平滑滚动**: 导航功能
- **滚动效果**: 导航栏动态效果

## 🌐 多语言支持

网站支持中英文切换：

- **中文**: 简体中文界面
- **英文**: 英文界面
- **切换**: 点击导航栏右侧按钮

## 📱 移动端优化

在移动设备上：
- 简化的导航栏
- 优化的视频显示
- 触摸友好的交互
- 适配的字体大小

## 🔄 更新脚本

项目包含自动更新脚本 `update_github_repo.py`：

```bash
# 在项目根目录运行
python update_github_repo.py
```

脚本功能：
- 检查Git状态
- 自动添加更改
- 创建提交
- 同步远程仓库
- 推送到GitHub

## 📝 自定义

### 修改视频
在 `index.html` 中找到视频展示区域：
```html
<iframe 
    width="315" 
    height="576" 
    src="YOUR_YOUTUBE_URL" 
    title="YOUR_TITLE"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
</iframe>
```

### 修改颜色主题
在CSS中修改颜色变量：
```css
:root {
    --primary-color: #000000;
    --secondary-color: #1d1d1f;
    --background-color: #ffffff;
    --text-color: #6e6e73;
}
```

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 📄 许可证

本项目采用MIT许可证。查看 [LICENSE](LICENSE) 文件了解更多信息。

## 📞 联系方式

- 项目地址: [https://github.com/IIIIQIIII/short-studio-web](https://github.com/IIIIQIIII/short-studio-web)
- 问题反馈: [GitHub Issues](https://github.com/IIIIQIIII/short-studio-web/issues)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

**Short Studio** - 用专业工具创作引人入胜的短剧
