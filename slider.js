let imagesSources = ["assets/bab.jpg", "assets/skypond.jpg", "assets/naturejournal.jpg"];

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

const slides = Array.from(document.querySelectorAll('.project__image'));
console.log(slides);


for (let i = 0; i < slides.length; i++) {
    slides[i].src = imagesSources[i];
}

const resetSlides = () => {
    for (let i = 0; i < imagesSources.length; i++) {
        imagesSources[i] = slides[i].src;
    }
}

const advanceSlides = () => {
    for (let i = 0; i < imagesSources.length; i++) {
        if (i === 0) {
            slides[imagesSources.length - 1].src = imagesSources[i];
        } else {
            slides[i - 1].src = imagesSources[i];
        }
    }
    resetSlides();
}

const slideBackwards = () => {
    let k = imagesSources.length - 1;
    for (let i = k; i >= 0; i--) {
        if (i === k) {
            slides[0].src = imagesSources[k];
        } else {
            slides[i + 1].src = imagesSources[i];
        }
    }
    resetSlides();
}



    plusButton.addEventListener('click', advanceSlides);
    minusButton.addEventListener('click', slideBackwards);









