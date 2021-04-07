const sliderSection = document.getElementById("slider-1");
let sliderContent = document.querySelectorAll(".slider-content");
let sliderContentLast = sliderContent[sliderContent.length -1];
const btnRight = document.getElementById("btnRight");
const btnLeft = document.getElementById("btnLeft");

sliderSection.insertAdjacentElement("afterbegin", sliderContentLast);

function next() {
    let sliderContentFirst = document.querySelectorAll(".slider-content")[0];
    // sliderSection.classList.add(".js-slider-section");
    sliderSection.style.marginLeft = "-200%";
    sliderSection.style.transition = "all 0.5s";

    setTimeout(() => {
        sliderSection.style.transition = "none";
        sliderSection.insertAdjacentElement("beforeend", sliderContentFirst);
        sliderSection.style.marginLeft = "-100%";
    }, 500);
}


function prev() {
    let sliderContent = document.querySelectorAll(".slider-content");
    let sliderContentLast = sliderContent[sliderContent.length -1];
    sliderSection.style.marginLeft = "0";
    sliderSection.style.transition = "all 0.5s";

    setTimeout(() => {
        sliderSection.style.transition = "none";
        sliderSection.insertAdjacentElement("afterbegin", sliderContentLast);
        sliderSection.style.marginLeft = "-100%";
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