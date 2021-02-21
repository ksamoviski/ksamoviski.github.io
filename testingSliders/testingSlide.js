const redBox = document.getElementById('redBox');
const blueBox = document.getElementById('blueBox');
const greenBox = document.getElementById('greenBox');

red = {
    box:redBox,
    placement: 45
}

blue = {
    box:blueBox,
    placement: 50
}

green = {
    box:greenBox,
    placement: 55
}

const slides = [red, blue, green];


const plus = document.getElementById('plus');
const minus = document.getElementById('minus');



const advance = () => {

    slides.forEach(slide=> {
        slide.placement += 1;
        slide.box.style.left = slide.placement + "%";
    
        if (slide.placement === 60) {
            slide.box.style.left = 45 + "%";
            slide.placement = 45;
        }
    
    })
}

const retreat = () => {
  
    slides.forEach(slide=> {
        slide.placement -= 1;
        slide.box.style.left = slide.placement + "%";

        if (slide.placement === 40) {
            slide.box.style.left = 55 + "%";
            slide.placement = 55;
        }

    })

}



plus.addEventListener('click', advance);
minus.addEventListener('click', retreat);