
const track = document.querySelector('.track')
const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');

let carouselWidth = document.querySelector('.outerProjectContainer').offsetWidth;

let imagesSources = ["assets/bab.jpg", "assets/skypond.jpg", "assets/naturejournal.jpg",
"assets/berlin2019smaller.JPG", "assets/bryce2018smaller.JPG", "assets/grace2019smaller.JPG"];



// this loop will build the project containers and put them in the carousel

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
    track.appendChild(outerProjectDiv);
}

let index = 0;

arrowRight.addEventListener('click', ()=> {
    index++;
    console.log(carouselWidth);
    arrowLeft.classList.add('show');
    track.style.transform = `translateX(-${index * carouselWidth}px)`;

    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
        arrowRight.classList.add('hide');
    }

});

arrowLeft.addEventListener('click', () => {
    index--;
    arrowRight.classList.remove('hide');
    if (index === 0) {
        arrowLeft.classList.remove('show');
    }
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
});
