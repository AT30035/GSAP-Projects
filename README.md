# 🎭 GSAP Projects

[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 📋 Overview

This repository showcases a collection of animation projects built using GreenSock Animation Platform (GSAP). These projects demonstrate various animation techniques, timelines, and interactive elements to create engaging web experiences.

## 📁 Repository Structure

- `📂 Basic-Animations/` - Fundamental GSAP animation examples
- `📂 Advanced-Timelines/` - Complex sequenced animations
- `📂 Scroll-Triggers/` - Scroll-based animations and effects
- `📂 Interactive-Elements/` - User-driven animated components

## 🔍 Key Features

- ✅ Smooth, performance-optimized animations
- ✅ Responsive designs that animate properly across devices
- ✅ Well-commented code explaining animation techniques
- ✅ Progressive complexity from basic to advanced GSAP concepts
- ✅ Interactive demos with practical use cases

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/AT30035/GSAP-Projects.git
   ```

2. Navigate to any project folder:
   ```bash
   cd GSAP-Projects/Basic-Animations
   ```

3. Open the HTML file in your browser to see the animations in action

4. Make sure to include the GSAP library in your projects:
   ```html
   <!-- CDN links for GSAP -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
   ```

## 💡 Usage Examples

```javascript
// Basic GSAP Animation
gsap.to(".box", {
  duration: 2,
  x: 200,
  y: 100,
  rotation: 360,
  backgroundColor: "#8d44ad",
  ease: "elastic.out(1, 0.3)",
  stagger: 0.2
});

// GSAP Timeline Example
const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});

tl.from(".header", {y: -100, opacity: 0})
  .from(".card", {scale: 0.8, opacity: 0, stagger: 0.2}, "-=0.5")
  .from(".footer", {y: 100, opacity: 0}, "-=0.3");

// ScrollTrigger Example
gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax-element", {
  y: 300,
  scrollTrigger: {
    trigger: ".section",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true
  }
});
```

## 📚 GSAP Learning Path

This repository demonstrates a progression of GSAP skills:

1. **Basics** - Simple animations, tweens, and easing functions
2. **Intermediate** - Timelines, staggered animations, and callbacks
3. **Advanced** - ScrollTrigger, complex sequences, and performance optimization
4. **Expert** - Custom plugins, advanced motion paths, and 3D transformations

## 🛠️ Technologies Used

- GSAP (GreenSock Animation Platform)
- JavaScript (ES6+)
- HTML5
- CSS3
- ScrollTrigger Plugin
- MotionPath Plugin (for select projects)

## 🤝 Contributing

Contributions and feedback are welcome! Feel free to open an issue or submit a pull request with your own GSAP animation examples.

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- GitHub: [@AT30035](https://github.com/AT30035)
- if You Want to contact me here is the mail:- abhay.tiwari3003@gmail.com

---

⭐ **Star this repository if you find these GSAP animations helpful!** ⭐
