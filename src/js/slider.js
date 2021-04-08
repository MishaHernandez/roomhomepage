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
// botones
const btnRight = document.getElementById("btnRight");
const btnLeft = document.getElementById("btnLeft");


function next() {
    let sliderContentFirst1 = document.querySelectorAll(".slider-content1")[0];
    let sliderContentFirst2 = document.querySelectorAll(".slider-content2")[0];
    // sliderSection.classList.add(".js-slider-section");
    sliderSection1.style.marginLeft = "-200%";
    sliderSection2.style.marginLeft = "-200%";
    sliderSection1.style.transition = "all 0.5s";
    sliderSection2.style.transition = "all 0.5s";

    setTimeout(() => {
        sliderSection1.style.transition = "none";
        sliderSection2.style.transition = "none";
        sliderSection1.insertAdjacentElement("beforeend", sliderContentFirst1);
        sliderSection2.insertAdjacentElement("beforeend", sliderContentFirst2);
        sliderSection1.style.marginLeft = "-100%";
        sliderSection2.style.marginLeft = "-100%";
    }, 500);
}

function prev() {
    let sliderContent1 = document.querySelectorAll(".slider-content1");
    let sliderContent2 = document.querySelectorAll(".slider-content2");
    let sliderContentLast1 = sliderContent1[sliderContent1.length -1];
    let sliderContentLast2 = sliderContent2[sliderContent2.length -1];
    sliderSection1.style.marginLeft = "0";
    sliderSection2.style.marginLeft = "0";
    sliderSection1.style.transition = "all 0.5s";
    sliderSection2.style.transition = "all 0.5s";

    setTimeout(() => {
        sliderSection1.style.transition = "none";
        sliderSection2.style.transition = "none";
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