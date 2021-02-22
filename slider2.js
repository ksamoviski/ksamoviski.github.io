
const project1Div = document.getElementById('project1');
const project2Div = document.getElementById('project2');
const project3Div = document.getElementById('project3');

let imagesSources = ["assets/bab.jpg", "assets/skypond.jpg", "assets/naturejournal.jpg"];

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

const slides = Array.from(document.querySelectorAll('.project__image'));

for (let i = 0; i < slides.length; i++) {
    slides[i].src = imagesSources[i];
}


project1 = {
    container : project1Div,
    placement : 0
}

project2 = {
    container : project2Div,
    placement : 35
}

project3 = {
    container : project3Div,
    placement : 70
}

const projectsList = [project1, project2, project3];

const advance = () => {

    projectsList.forEach(project=> {
        project.placement += 5;
        project.container.style.left = project.placement + "%";
        
    
        if (project.placement > 110) {
            project.container.style.left = 5 + "%";
            project.placement = 5;
            console.log(project.placement);

        }
    

    })
}

const retreat = () => {

    projectsList.forEach(project=> {
        project.placement -= 5;
        project.container.style.left = project.placement + "%";
        
    
        if (project.placement < -10) {
            project.container.style.left = 95 + "%";
            project.placement = 95;
            console.log(project.placement);
        }
    
    })
}


plus.addEventListener('click', advance);
minus.addEventListener('click', retreat);
