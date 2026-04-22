"use strict";

//styrer animationerne når tingene skal loades
let animation = null;
let progress = 0;
let isAnimating = false;

function galleryAnimation() {
  animation = lottie.loadAnimation({
    container: document.getElementById("lottie-kasse"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/Showcase.json",
  });
}

window.addEventListener("load", galleryAnimation);
