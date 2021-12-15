const CLASS = Object.freeze({
    SLIDER_ELEMENT: 'sliderElement',
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right',
    BLOCK: 'block',
    NONE: 'none',
    SLIDER_LEFT_ARROW: 'sliderArrowLeft',
    SLIDER_RIGHT_ARROW: 'sliderArrowRight',
    LEFT_ARROW: 'arrowLeft',
    RIGHT_ARROW: 'arrowRight',
});
const SELECTOR = Object.freeze({
    SLIDER_ELEMENT: '.sliderElement',
    SLIDER_LEFT_ARROW: '.sliderArrowLeft',
    SLIDER_RIGHT_ARROW: '.sliderArrowRight',
});
const leftArrow = document.querySelector(SELECTOR.SLIDER_LEFT_ARROW);
const rightArrow = document.querySelector(SELECTOR.SLIDER_RIGHT_ARROW);
let slideIndex = 1;
let animation = CLASS.CENTER;

leftArrow.addEventListener('click', onLeftArrowClick);
rightArrow.addEventListener('click', onRightArrowClick);

function onLeftArrowClick(event) {
    const left = event.target;
    if (left.classList.contains(CLASS.SLIDER_LEFT_ARROW) || left.classList.contains(CLASS.LEFT_ARROW)) {
        minusSlide();
    };
};

function onRightArrowClick(event) {
    const right = event.target;
    if (right.classList.contains(CLASS.SLIDER_RIGHT_ARROW) || right.classList.contains(CLASS.RIGHT_ARROW)) {
        plusSlide();
    };
};

function plusSlide() {
    animation = CLASS.RIGHT;
    showSlides(slideIndex += 1, animation);
};

function minusSlide() {
    animation = CLASS.LEFT;
    showSlides(slideIndex -= 1, animation);
};

function showSlides(n, animation) {
    const slides = document.querySelectorAll(SELECTOR.SLIDER_ELEMENT);

    if (n > slides.length) {
        slideIndex = 1
    };
    if (n < 1) {
        slideIndex = slides.length
    };

    for (let i = 0; i < slides.length; i++) {
        let displayNone = slides[i];
        displayNone.classList.remove(CLASS.BLOCK, CLASS.LEFT, CLASS.RIGHT, CLASS.CENTER);
        displayNone.classList.add(CLASS.NONE);
    };

    const displayBlock = slides[slideIndex - 1];
    displayBlock.classList.toggle(CLASS.BLOCK);
    displayBlock.classList.toggle(animation);
};

showSlides(slideIndex, animation)