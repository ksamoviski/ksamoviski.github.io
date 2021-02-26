
const project1Div = document.getElementById('project1');
const project2Div = document.getElementById('project2');
const project3Div = document.getElementById('project3');
const project4Div = document.getElementById('project4');
const project5Div = document.getElementById('project5');
const project6Div = document.getElementById('project6');




let imagesSources = ["assets/bab.jpg", "assets/skypond.jpg", "assets/naturejournal.jpg"];

let testingSecondImageList = ["assets/berlin2019.JPG", "assets/bryceCanyon.JPG", "assets/grace2019.JPG"];

const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');

const slides = Array.from(document.querySelectorAll('.project__image'));


const assignImages = (imageSourceList) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].src = imageSourceList[i];
    }
}


assignImages(imagesSources);


project1 = {
    container: project1Div,
    placement: 0
}

project2 = {
    container: project2Div,
    placement: 0
}

project3 = {
    container: project3Div,
    placement: 0
}

project4 = {
    container: project4Div,
    placement: 0
}

project5 = {
    container: project5Div,
    placement: 0
}

project6 = {
    container: project6Div,
    placement: 0
}

const projectsList = [project1, project2, project3];

const advance = () => {

    projectsList.forEach(project => {

        assignImages(testingSecondImageList);
        // project.placement += 10;
        // console.log(project.placement)
        // project.container.style.left = project.placement + "%";


        // if (project.placement > 80) {
        //     project.container.style.left = 0 + "%";
        //     project.placement = 0;
        //     console.log(project.placement);

        // }


    })
}

const retreat = () => {

    projectsList.forEach(project => {

        assignImages(imagesSources);



        // project.placement -= 10;
        // project.container.style.left = project.placement + "%";


        // if (project.placement < -10) {
        //     project.container.style.left = 100 + "%";
        //     project.placement = 100;
        //     console.log(project.placement);
        // }

    })
}


arrowRight.addEventListener('click', advance);
arrowLeft.addEventListener('click', retreat);
