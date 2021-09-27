const bgItems = document.querySelectorAll('.slide-bg__link');
const imageSlides = document.querySelectorAll('.slide-bg__inner');
const shapes = document.querySelectorAll('.shapes__content');
const shapeSlides = document.querySelectorAll('.shapes__item');
const helperInput = document.querySelector('#helper-input');
const slidesBg = document.querySelector('.slide-bg');
const mainSection = document.querySelector('.main-section');
const links = document.querySelectorAll('a');
const mouse = document.querySelector('.mouse');

const slidesCount = 5;
let slideCounter = 1;
const easing = BezierEasing(0.77, 0.125, 0.265, 1.04);

const startComplete = () => {
  imageSlides.forEach(el => {
    el.style.opacity = 1;
  });
  shapeSlides.forEach(el => {
    el.style.opacity = 1;
  });
};

const startinTl = gsap.timeline({ defaults: {ease: easing }, onComplete: startComplete });