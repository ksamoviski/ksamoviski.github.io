const carousel = document.querySelector('.projects')
const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');
const clickedProjectContainer = document.getElementById('clickedProjectContainer');


let imagesSources = ["assets/bab.jpg", "assets/skypond.jpg", "assets/naturejournal.jpg",
"assets/berlin2019smaller.JPG", "assets/bryce2018smaller.JPG", "assets/grace2019smaller.JPG"];


const setHeight = (i) => {
    clickedProjectContainer.style.height = i + "vh";
}


const scrollOpenProjectContainer = () => {
    for (let i = 0; i < 40; i++) {
        setTimeout(setHeight, i * 20, i);
    }
}



const openProjectStuff = (i) => {
    clickedProjectContainer.removeChild(clickedProjectContainer.firstChild);
    clickedProjectContainer.classList.remove('hidden');
    let justClicked = document.createElement('h1');
    justClicked.innerText = "Hello, I will show you super-cool project number " + (i + 1);
    clickedProjectContainer.appendChild(justClicked);
    scrollOpenProjectContainer();
}



for (let i = 0; i < imagesSources.length; i++) {
    let outerProjectDiv = document.createElement('div');
    let innerProjectDiv = document.createElement('div');
    let image = document.createElement('img');

    outerProjectDiv.class = "single__project";
    outerProjectDiv.style.margin = "1vw";
    
    outerProjectDiv.addEventListener('mouseover', ()=> {
        outerProjectDiv.style.opacity = "0.4";
    });

    outerProjectDiv.addEventListener('mouseout', ()=> {
        outerProjectDiv.style.opacity = "1.0";
    })

    outerProjectDiv.addEventListener('click', ()=> {
        openProjectStuff(i);
    })

    innerProjectDiv.class = "project__container";

    image.class = "project__image";
    image.src = imagesSources[i];
    image.style.width = "25vw";
    
    innerProjectDiv.appendChild(image);
    outerProjectDiv.appendChild(innerProjectDiv);
    carousel.appendChild(outerProjectDiv);
}


const forward = () => {
    carousel.style.left = "-106%";
}

const backward = () => {
    carousel.style.left = "-2%";
}


backward();
arrowRight.addEventListener('click', forward);
arrowLeft.addEventListener('click', backward);

