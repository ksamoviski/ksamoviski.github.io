const carousel = document.querySelector('.projects')
const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');


let imagesSources = ["assets/bab.jpg", "assets/skypond.jpg", "assets/naturejournal.jpg",
"assets/berlin2019smaller.JPG", "assets/bryce2018smaller.JPG", "assets/grace2019smaller.JPG"];



for (let i = 0; i < imagesSources.length; i++) {
    let outerProjectDiv = document.createElement('div');
    let innerProjectDiv = document.createElement('div');
    let image = document.createElement('img');

    outerProjectDiv.class = "single__project";
    outerProjectDiv.style.margin = "1vw";

    innerProjectDiv.class = "project__container";

    image.class = "project__image";
    image.src = imagesSources[i];
    image.style.width = "25vw";

    innerProjectDiv.appendChild(image);
    outerProjectDiv.appendChild(innerProjectDiv);
    carousel.appendChild(outerProjectDiv);
}


const forward = () => {
    carousel.style.left = "-102%";
}

const backward = () => {
    carousel.style.left = "-2%";
}


backward();
arrowRight.addEventListener('click', forward);
arrowLeft.addEventListener('click', backward);

