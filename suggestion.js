const body = document.querySelector('body');
const openModalButton = document.getElementById('modal-trigger');
const closeModalButton = document.getElementById('close-modal');
const modalBackdrop = document.getElementById("backdrop");
const navElement = document.querySelector('nav');


const articles = document.querySelectorAll('#projects article');


body.addEventListener('click', ()=> {
    navElement.classList.remove('open');
})

navElement.addEventListener('click', ()=> {
    this.classList.toggle('open');
})

openModalButton.addEventListener('click', ()=> {
    body.classList.add('modal-open');
    modalBackdrop.style.display = "flex";
})

closeModalButton.addEventListener('click', ()=> {
    body.classList.remove('modal-open');
    modalBackdrop.style.display = "none";
})

// articles.forEach(article=> {
//     let button = article.querySelector('button');
//     button.addEventListener('click', ()=> {
//         article.classList.toggle('expanded');
//         button.innerHTML = article.classList.contains('expanded')?
//         'Hide Details' : 'Show Details';
//     })
// })


window.addEventListener('resize', ()=> {
    navElement.classList.remove('open');
    articles.forEach(article=> {
        article.classList.remove('expanded');
    })
})


