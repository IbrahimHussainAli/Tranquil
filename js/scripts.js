"use strict";

console.log("Welcome to Tranquil");

//NavigationBar
let mainNav = document.getElementById('nav-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

//Homepage slide

let slideIndex = 0;
let slides = document.getElementsByClassName("featureSlides");

function showSlides() {
  if (!slides.length) return;
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);

}
showSlides();
