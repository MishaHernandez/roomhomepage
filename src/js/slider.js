// slider
const sliderSection1 = document.getElementById("slider-1");
const sliderSection2 = document.getElementById("slider-2");
// elemento del slider
let sliderContent1 = document.querySelectorAll(".slider-content1");
let sliderContent2 = document.querySelectorAll(".slider-content2");
let sliderContentLast1 = sliderContent1[sliderContent1.length -1];
let sliderContentLast2 = sliderContent2[sliderContent2.length -1];
// posicionar elementos del slider
sliderSection1.insertAdjacentElement("afterbegin", sliderContentLast1);
sliderSection2.insertAdjacentElement("afterbegin", sliderContentLast2);
// js-opacity-0
document.querySelectorAll(".slider-content2")[0].classList.add("js-opacity-0");
document.querySelectorAll(".slider-content2")[2].classList.add("js-opacity-0");

// botones
const btnRight = document.getElementById("btnRight");
const btnLeft = document.getElementById("btnLeft");

function next() {
    let sliderContentFirst1 = document.querySelectorAll(".slider-content1")[0];
    let sliderContentFirst2 = document.querySelectorAll(".slider-content2")[0];
    
    sliderSection1.style.marginLeft = "-200%";
    sliderSection2.style.marginLeft = "-200%";
    sliderSection1.style.transition = "all 0.5s";
    sliderSection2.style.transition = "all 0.5s";
    
    // transicion de la imagen 1 (sale por la izquierda)
    document.querySelectorAll(".slider-content2")[1].style.opacity = 0;
    document.querySelectorAll(".slider-content2")[1].style.transition = "opacity .1s";
    // transicion de la imagen 2 (entra por la derecha)
    document.querySelectorAll(".slider-content2")[2].style.opacity = 1;
    document.querySelectorAll(".slider-content2")[2].style.transition = "opacity 2s";
    
    setTimeout(() => {
        sliderSection1.style.transition = "none";
        sliderSection2.style.transition = "none";
        sliderSection1.style.marginLeft = "-100%";
        sliderSection2.style.marginLeft = "-100%";
        
        // aqui el 0 pasa a ser 2
        sliderSection1.insertAdjacentElement("beforeend", sliderContentFirst1);
        sliderSection2.insertAdjacentElement("beforeend", sliderContentFirst2);

    }, 500);
}

function prev() {
    let sliderContent1 = document.querySelectorAll(".slider-content1");
    let sliderContent2 = document.querySelectorAll(".slider-content2");
    let sliderContentLast1 = sliderContent1[sliderContent1.length -1];
    let sliderContentLast2 = sliderContent2[sliderContent2.length -1];

    sliderSection1.style.marginLeft = "0";
    sliderSection2.style.marginLeft = "0";

    // transicion de la imagen 0 (entra por la izquierda)
    document.querySelectorAll(".slider-content2")[0].style.opacity = 1;
    document.querySelectorAll(".slider-content2")[0].style.transition = "opacity 2s";
    // transicion de la imagen 1 (sale por la derecha)
    document.querySelectorAll(".slider-content2")[1].style.opacity = 0;
    document.querySelectorAll(".slider-content2")[1].style.transition = "opacity .1s";

    sliderSection1.style.transition = "all 0.5s";
    sliderSection2.style.transition = "all 0.5s";

    setTimeout(() => {
        sliderSection1.style.transition = "none";
        sliderSection2.style.transition = "none";
        // aqui el 2 pasa a ser 0
        sliderSection1.insertAdjacentElement("afterbegin", sliderContentLast1);
        sliderSection2.insertAdjacentElement("afterbegin", sliderContentLast2);
        sliderSection1.style.marginLeft = "-100%";
        sliderSection2.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener("click", ()=> {
    next();
})

btnLeft.addEventListener("click", () => {
    prev();
})

// setInterval(() => {
//     next();
// }, 4000);