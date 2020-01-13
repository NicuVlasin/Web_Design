const slider = document.querySelector('.slider');
const button = document.querySelectorAll('.btn');
const options = document.querySelectorAll('.option');
const slides = document.querySelectorAll('.img');
const backgrounds = document.querySelectorAll('.bg');

var index = 1;
var op_index = 0;
var size = slides[index].clientWidth;

update();

function update() {
    slider.style.transform = "translateX(" + (-size * index) + "px";

    options.forEach(op => op.classList.remove('colored'));
    options[op_index].classList.add('colored');

    backgrounds.forEach(bg => bg.classList.remove('show'));
    backgrounds[op_index].classList.add('show')
}

function slide(){
    slider.style.transition = "transform .5s ease-in-out";

    update();
}

function btnCheck(){
    if(this.id === "prev"){
        index--;

        if (op_index == 0){
            op_index = 4;
        }
        else {
            op_index--;
        }
    }
    else if (this.id === "next"){
        index++;

        if (op_index == 4){
            op_index = 0;
        }
        else {
            op_index++;
        }
    }

    slide();
}

function optionFunc(){
    let i = Number(this.getAttribute('option-index'));
    index = i + 1;
    op_index = i;
    slide();
}

slider.addEventListener('transitionend', () => {
    if(slides[index].id === "last"){
        slider.style.transition = "none";
        index = slides.length - 2;
        slider.style.transform = "translateX(" + (-size * index) + "px";
    }
    else if(slides[index].id === "first"){
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = "translateX(" + (-size * index) + "px";
    }
    
});

button.forEach(btn => btn.addEventListener('click', btnCheck));
options.forEach(options => options.addEventListener('click', optionFunc));