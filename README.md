# Short Studio Web

A professional short drama studio website featuring Apple UI design style, showcasing our creative works and official demos.

## 🌟 Features

- 🎨 **Apple UI Design Style** - Clean and elegant design following Apple's design language
- 📱 **Responsive Design** - Perfectly adapted for desktop and mobile devices
- 🌐 **Multilingual Support** - Supports Chinese and English language switching
- 🎬 **Video Showcase** - Official demo video with 3D effects and beautiful animations
- ⚡ **Modern Tech Stack** - Built with pure HTML, CSS, and JavaScript

## 📁 Project Structure

```
short-studio-web/
├── index.html          # Main page
├── favicon.ico         # Website icon
├── favicon.png         # PNG format icon
├── favicon.svg         # SVG format icon
└── README.md           # Project documentation
```

## 🚀 Quick Start

### Local Development

1. Clone the project to your local machine
```bash
git clone https://github.com/IIIIQIIII/short-studio-web.git
cd short-studio-web
```

2. Open the `index.html` file
```bash
# Open with browser
open index.html
```

### Deploy to GitHub Pages

This project can be directly deployed to GitHub Pages:

1. Ensure all files are in the `main` branch
2. Enable GitHub Pages in repository settings
3. Select `main` branch as the source
4. Visit the provided URL

## 🎯 Main Features

### 1. Navigation Bar
- Fixed at the top of the page
- Frosted glass effect support
- Chinese-English language switching
- Responsive design

### 2. Hero Section
- Full-screen hero area
- Gradient background effects
- Dynamic text effects
- Call-to-action button

### 3. Video Showcase
- YouTube video embedding
- 3D rotation effects
- Hover animations
- Apple-style shadows

### 4. Feature Highlights
- Professional production tools
- Fast workflow
- Target audience analysis

## 🎨 Design Features

### Apple UI Design Style
- **Color Scheme**: Using Apple's standard black, white, and gray color palette
- **Typography**: Apple system font stack
- **Corners**: Large rounded design elements
- **Shadows**: Multi-layer shadow system
- **Animations**: Smooth transition effects

### Responsive Design
- **Mobile First**: Design starting from small screens
- **Breakpoints**: 768px and 1200px
- **Flexible Layout**: Using Flexbox and Grid
- **Media Queries**: Optimized for different devices

## 🔧 Technical Implementation

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Short Studio</title>
    <!-- Icons and styles -->
</head>
<body>
    <!-- Navigation -->
    <nav>...</nav>
    
    <!-- Hero Section -->
    <section class="hero">...</section>
    
    <!-- Video Showcase -->
    <section class="video-showcase">...</section>
    
    <!-- Features -->
    <section class="features">...</section>
    
    <!-- Footer -->
    <footer>...</footer>
</body>
</html>
```

### CSS Features
- **CSS Variables**: Theme color management
- **Flexbox**: Flexible layout
- **Grid**: Grid layout system
- **Animations**: Keyframe animations
- **Filters**: Frosted glass effects

### JavaScript Features
- **Language Switching**: Chinese-English toggle
- **Smooth Scrolling**: Navigation functionality
- **Scroll Effects**: Dynamic navigation bar effects

## 🌐 Multilingual Support

The website supports Chinese and English switching:

- **Chinese**: Simplified Chinese interface
- **English**: English interface
- **Switching**: Click the button on the right side of the navigation bar

## 📱 Mobile Optimization

On mobile devices:
- Simplified navigation bar
- Optimized video display
- Touch-friendly interactions
- Adaptive font sizes

## 🔄 Update Script

The project includes an automatic update script `update_github_repo.py`:

```bash
# Run from project root directory
python update_github_repo.py
```

Script features:
- Check Git status
- Automatically add changes
- Create commits
- Sync remote repository
- Push to GitHub

## 📝 Customization

### Modify Video
Find the video showcase section in `index.html`:
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

### Modify Color Theme
Modify color variables in CSS:
```css
:root {
    --primary-color: #000000;
    --secondary-color: #1d1d1f;
    --background-color: #ffffff;
    --text-color: #6e6e73;
}
```

## 🤝 Contributing

Issues and Pull Requests are welcome to improve this project!

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## 📞 Contact

- Project URL: [https://github.com/IIIIQIIII/short-studio-web](https://github.com/IIIIQIIII/short-studio-web)
- Issues: [GitHub Issues](https://github.com/IIIIQIIII/short-studio-web/issues)

## 🙏 Acknowledgments

Thanks to all developers who contributed to this project!

---

**Short Studio** - Create compelling short dramas with professional tools
