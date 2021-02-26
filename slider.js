const carousel = document.querySelector('.projects')
const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');



const slides = Array.from(document.querySelectorAll('.project__image'));



let imagesSources = ["assets/bab.jpg", "assets/skypond.jpg", "assets/naturejournal.jpg",
    "assets/berlin2019smaller.JPG", "assets/bryce2018smaller.JPG", "assets/grace2019smaller.JPG"];


for (let i = 0; i < slides.length; i++) {
    slides[i].src = imagesSources[i];
}



const forward = () => {
    carousel.style.left = "-105%";
}

const backward = () => {
    carousel.style.left = "0%";
}


arrowRight.addEventListener('click', forward);
arrowLeft.addEventListener('click', backward);

