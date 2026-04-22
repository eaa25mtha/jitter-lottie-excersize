"use strict";

//styrer animationerne når tingene skal loades
//variabler
let animation = null;
let progress = 0;
let isAnimating = false;

function galleryAnimation() {
  animation = lottie.loadAnimation({
    //kriterier, hvad skal den hentes som, skal der være loop, autoplay og hvor kommer den fra?
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/foto-gallery.json",
  });
}

//lytter på galleryAnimation funktionen
window.addEventListener("load", galleryAnimation);
