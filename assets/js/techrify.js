$(document).ready(function () {
  if (window.matchMedia("(min-width: 768px)").matches) { // Check for minimum width of 768px (adjust as needed)
    const split5 = new SplitType(".text-5", { type: "chars" });
    const split6 = new SplitType(".text-6", { type: "chars" });
    const split7 = new SplitType(".text-7", { type: "chars" });
    const split7Mobile = new SplitType(".text-7-mobile", { type: "chars" });
    const split8 = new SplitType(".text-8", { type: "chars" });
    const split9 = new SplitType(".text-9", { type: "chars" });
    const split10 = new SplitType(".text-10", { type: "chars" });
    const split11 = new SplitType(".text-11", { type: "chars" });
    // ... rest of your code ...
    $('#fullpage').fullpage({
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
      autoScrolling: true,
      navigation: true,

      onLeave: function (index, destination, direction) {
        if (index === 1) {
          gsap.to(split5.chars, {
            y: 0,
            ease: "power3.out",
            duration: 0.5,
          });

        }
        if (index === 2) {
          gsap.to(split6.chars, {
            y: 0,
            ease: "power3.out",
            stagger: 0.15,
            duration: 0.5,
          });
          gsap.to(".img-reveal", {
            yPercent: -100,
            ease: "power1.out",
            stagger: {
              amount: 2
            },
            duration: 1.5,
          });
        }
        if (index === 3) {
          gsap.to(split7.chars, {
            y: 0,
            ease: "power3.out",
            stagger: 0.15,
            duration: 0.5,
          });
        }
        if (index === 4) {
          gsap.to(split8.chars, {
            y: 0,
            ease: "power3.out",
            stagger: 0.15,
            duration: 0.5,
          });
          gsap.to(split11.chars, {
            y: 0,
            ease: "power3.out",
            stagger: 0.15,
            duration: 0.5,
          });
        }
        if (index === 5) {
          gsap.to(split9.chars, {
            y: 0,
            ease: "power3.out",
            duration: 0.5,
          });
          gsap.to(split10.chars, {
            y: 0,
            ease: "power3.out",
            duration: 0.5,
          });
        }
      }
    });
  }
});
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = 'abcdefghijklmnopqrstuvwxyz';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
const phrases = ['breaking boundaries', 'making brands', 'digital experiences.'];
const el = document.querySelector('.animated-text');
const fx = new TextScramble(el);
let counter = 0;

const startAnimation = () => {
  setTimeout(() => {
    const next = () => {
      setTimeout(() => {
        fx.setText(phrases[counter], 10000).then(() => next());
        counter = (counter + 1) % phrases.length;
      }, 2000);
    };
    next();
  }, 5000); // 5 seconds delay
};
startAnimation();
const ell = document.querySelector('.animated-text-mobile');
const fxx = new TextScramble(ell);
let counters = 0;

const startMobileAnimation = () => {
  setTimeout(() => {
    const nexts = () => {
      setTimeout(() => {
        fxx.setText(phrases[counters], 10000).then(() => nexts());
        counters = (counters + 1) % phrases.length;
      }, 2000);
    };
    nexts();
  }, 5000); // 5 seconds delay
};
startMobileAnimation();
/*---------------------------------------
------ PreLoader    
-----------------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
var toggleElement = document.querySelector('.mode-toggle');
var iconElement = document.getElementById('theme-icon');
var toggleServices = document.querySelector('.mode-toggle-services');
var iconService = document.getElementById('service-icon');
var toggleWork = document.querySelector('.mode-toggle-work');
var iconWork = document.getElementById('work-icon');
var toggleFounder = document.querySelector('.mode-toggle-founder');
var iconFounder = document.getElementById('founder-icon');
var toggleContact = document.querySelector('.mode-toggle-contact');
var iconContact = document.getElementById('contact-icon');
var toggleFooter = document.querySelector('.footer-mode-toggle');
var iconFooter = document.getElementById('footer-icon');
var iconTop = document.getElementById('back-to-top');
var iconCursor = document.getElementById('drag-cursor');
var paths = document.querySelectorAll('.path-class');
var pathWhite = document.querySelectorAll('.path-white');
var arrows = document.querySelectorAll('.arrow-class');
var fills = document.querySelectorAll('.svg-fill');
const svg = document.querySelector('.toggle-theme');

toggleElement.addEventListener('click', function (event) {
  event.preventDefault();

  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union-dark";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor-white";
    // Change stroke color to white when dark theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', '#ffffff');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#141414');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  } else {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor";
    // Change stroke color to original color when light theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#ffffff');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  }
});
toggleServices.addEventListener('click', function (event) {
  event.preventDefault();

  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union-dark";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor-white";
    // Change stroke color to white when dark theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', '#FFFFFF');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#141414');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  } else {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor";
    // Change stroke color to original color when light theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#ffffff');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  }
});
toggleWork.addEventListener('click', function (event) {
  event.preventDefault();

  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union-dark";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor-white";
    // Change stroke color to white when dark theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', 'white');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#141414');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  } else {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor";
    // Change stroke color to original color when light theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#ffffff');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  }
});
toggleFounder.addEventListener('click', function (event) {
  event.preventDefault();

  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union-dark";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor-white";
    // Change stroke color to white when dark theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', 'white');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#141414');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  } else {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor";
    // Change stroke color to original color when light theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#ffffff');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  }
});
toggleContact.addEventListener('click', function (event) {
  event.preventDefault();

  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union-dark";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor-white";
    // Change stroke color to white when dark theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', 'white');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#141414');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  } else {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor";
    // Change stroke color to original color when light theme is activated
    paths.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
    arrows.forEach(function (arrows) {
      arrows.setAttribute('stroke', '#ffffff');
    });
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#141414');
    });
  }
});
toggleFooter.addEventListener('click', function (event) {
  event.preventDefault();

  document.body.classList.toggle('dark-theme');
  var darkModeActive = document.body.classList.contains('dark-theme');

  if (darkModeActive) {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union-dark";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor-white";
    // If dark mode is active, set stroke color to white
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#000000');
    });
  } else {
    iconElement.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconService.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconWork.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFounder.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconContact.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/dark-theme-icon";
    iconFooter.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/light-theme-icon";
    iconTop.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/Union";
    iconCursor.src = "https://res.cloudinary.com/dmfxqnlcm/image/upload/f_auto,q_auto/v1/img/drag-cursor";
    // If light mode is active, set stroke color to black
    pathWhite.forEach(function (path) {
      path.setAttribute('stroke', '#FFFFFF');
    });
  }
});
const loaderProgress = document.querySelector(".loader-progress");
const counterloader = document.querySelector(".counter");
const openButton = document.querySelector(".open-button");
let counterValue = 0;
const interval = setInterval(() => {
  counterValue++;
  counterloader.textContent = counterValue + "%";
  loaderProgress.style.strokeDasharray = `${counterValue * 2.83} 283`;
  if (counterValue === 100) {
    counterloader.style.display = "none";
    openButton.style.display = "block";
  }
}, 30);
openButton.addEventListener('mouseover', () => {
  gsap.to(loaderProgress, { duration: 0.3, fill: 'rgba(20, 20, 20, 0.03)', ease: "power1.out" });
});
openButton.addEventListener('mouseout', () => {
  gsap.to(loaderProgress, { duration: 0.3, fill: '', ease: "power1.in" });
});
openButton.addEventListener("click", function () {
  startSecondAnimation();
  document.querySelector(".preloader-container").classList.add("fade-out");
});
function startSecondAnimation() {
  const split1 = new SplitType(".text-1", { type: "chars" });
  gsap.to(split1.chars, {
    y: 0,
    ease: "power3.out",
    duration: 0.5
  });
}
/*---------------------------------------
------ ROLLING TEXT    
-----------------------------------------*/
let elements = document.querySelectorAll('.rolling-text');
elements.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';

  let textContainer = document.createElement('div');
  textContainer.classList.add('block');

  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0' : letter;
    span.classList.add('letter');
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});
// for presentation purpose
setTimeout(() => {
  elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('play');
    });
  })
}, 600);

elements.forEach(element => {
  element.addEventListener('mouseleave', () => {
    element.classList.remove('play');
  });
});
/*---------------------------------------
  ------ WORK
-----------------------------------------*/
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');

const end = () => {
  isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
  slider.addEventListener('mousedown', start);
  slider.addEventListener('touchstart', start);

  slider.addEventListener('mousemove', move);
  slider.addEventListener('touchmove', move);

  slider.addEventListener('mouseleave', end);
  slider.addEventListener('mouseup', end);
  slider.addEventListener('touchend', end);
})();
// Additional code for cursor movement
var videocon = document.getElementById("image-track");
var playcursor = document.querySelector(".custom-cursor")
videocon.addEventListener("mousemove", function (event) {
  const dets = event;
  gsap.to(playcursor, {
    left: dets.x - 50,
    top: dets.y - 50,
    duration: 1
  });
});
var HeroCursor = document.getElementById("section0");
var Heroplaycursor = document.querySelector(".hero-cursor")
HeroCursor.addEventListener("mousemove", function (event) {
  const dets = event;
  gsap.to(Heroplaycursor, {
    left: dets.x - 10,
    top: dets.y - 20,
    duration: 1
  });
});
var ServicesCursor = document.getElementById("section1");
var Servicesplaycursor = document.querySelector(".Services-cursor")
ServicesCursor.addEventListener("mousemove", function (event) {
  const dets = event;
  gsap.to(Servicesplaycursor, {
    left: dets.x - 10,
    top: dets.y - 20,
    duration: 1
  });
});


var milliseconds = 4000;

placeholder = function () {

  this.write_placeholder = function (field, text, n) {
    if (n < (text.length)) {
      $('#' + field).attr("placeholder", text.substring(0, n + 1));
      n++;
      setTimeout(function () {
        var obj = new placeholder();
        obj.write_placeholder(field, text, n)
      }, 65);
    }
  }

  this.set_fields = function (objFields) {
    for (var key in objFields) {
      // skip loop if the property is from prototype
      if (!objFields.hasOwnProperty(key)) continue;
      this.write_placeholder(key, objFields[key], 0);
      this.intervallize(objFields);
    }
  }

  this.intervallize = function (objFields) {
    var interval = setInterval(function () {
      for (var key in objFields) {
        if (!objFields.hasOwnProperty(key)) continue;
        var obj = new placeholder();
        obj.write_placeholder(key, objFields[key], 0);
      }
    }, milliseconds);
  }

  this.interval_time = function (ms) {
    milliseconds = ms;
  }

}
////////////////////////
var obj = new placeholder();
obj.interval_time(5000); // optional, default 4000 milliseconds
// pass an object as parameter
// key(s) : input field names
// value(s) : text to show as placeholder
obj.set_fields({
  'name': 'Ali Aal E Mohammad',
  'inquiry-type': 'E-commerce Website',
  'email': 'ali@techrify.co'
});


if (window.matchMedia("(max-width: 768px)").matches) {

  var toggleModeMobile = document.getElementById('mode-toggle');
  var svgPaths = toggleModeMobile.querySelectorAll('path');
  var svgCircle = toggleModeMobile.querySelectorAll('circle');

  toggleModeMobile.addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.toggle('dark-theme');

    // Toggle the colors of SVG paths based on dark mode
    svgPaths.forEach(function (path) {
      if (document.body.classList.contains('dark-theme')) {
        // Change to dark mode colors
        path.setAttribute('fill', '#141414'); // Change fill color
        path.setAttribute('stroke', '#001010'); // Change stroke color
      } else {
        // Change to light mode colors
        path.setAttribute('fill', '#EBD7B2'); // Change fill color
        path.setAttribute('stroke', '#EBD7B2'); // Change stroke color
      }
    });
    svgCircle.forEach(function (circle) {
      if (document.body.classList.contains('dark-theme')) {
        // Change to dark mode colors
        circle.setAttribute('fill', '#FFFFFF'); // Change fill color
        circle.setAttribute('stroke', '#001010'); // Change stroke color
      } else {
        // Change to light mode colors
        circle.setAttribute('fill', '#001010'); // Change fill color
        circle.setAttribute('stroke', '#EBD7B2'); // Change stroke color
      }
    });
  });
  const menuBtn = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('closeBtn');
  gsap.set(menuOverlay, { width: 0 });

  menuBtn.addEventListener('click', () => {
    gsap.to(menuOverlay, { width: '100%', duration: 0.5, ease: 'power2.inOut', opacity: 1 });
  });

  closeBtn.addEventListener('click', () => {
    gsap.to(menuOverlay, { width: 0, duration: 0.5, ease: 'power2.inOut', opacity: 0 });
  });

  // Handle click events on links inside the menu
  document.querySelectorAll('.menu ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior

      const target = this.getAttribute('data-target'); // Get the target section class name
      const section = document.querySelector(target); // Find the target section

      if (section) {
        // Fade out the menu overlay
        gsap.to(menuOverlay, {
          width: 0, duration: 0.5, ease: 'power2.inOut', opacity: 0, onComplete: () => {
            // Scroll to the target section smoothly after the menu is faded out
            section.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      }
    });
  });
  // INFINIT SLIDER ANIMATION
  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
        xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
        return xPercents[i];
      }
    });
    gsap.set(items, { x: 0 });
    totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = xPercents[i] / 100 * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
        .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
      vars = vars || {};
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex + 1, vars);
    tl.previous = vars => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    return tl;
  }
  const elems = gsap.utils.toArray(".elem");
  const loop = horizontalLoop(elems, { paused: false, repeat: -1 });

  let isDown = false;
  let startX;
  let scrollLeft;
  const sliderMob = document.querySelector('.items-mobile');

  const end = () => {
    isDown = false;
    sliderMob.classList.remove('active');
  }

  const start = (e) => {
    isDown = true;
    sliderMob.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - sliderMob.offsetLeft;
    scrollLeft = sliderMob.scrollLeft;
  }

  const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - sliderMob.offsetLeft;
    const dist = (x - startX);
    sliderMob.scrollLeft = scrollLeft - dist;
  }

  (() => {
    sliderMob.addEventListener('mousedown', start);
    sliderMob.addEventListener('touchstart', start);

    sliderMob.addEventListener('mousemove', move);
    sliderMob.addEventListener('touchmove', move);

    sliderMob.addEventListener('mouseleave', end);
    sliderMob.addEventListener('mouseup', end);
    sliderMob.addEventListener('touchend', end);
  })();


  document.getElementById("backToTopBtn").addEventListener("click", function () {
    // Scroll back to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional smooth scrolling behavior
    });
  });
  function toggleActive(event) {
    // Prevent the default action of the event
    event.preventDefault();

    // Remove 'active' class from all buttons
    var buttons = document.querySelectorAll('.budget-options button');
    buttons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    var button = event.target;
    button.classList.add('active');
  }

  // Add event listeners for both click and touch events to all buttons
  var buttons = document.querySelectorAll('.budget-options button');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', toggleActive);
    btn.addEventListener('touchstart', toggleActive);
  });
}




