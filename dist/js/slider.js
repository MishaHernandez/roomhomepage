const sliderSection1=document.getElementById("slider-1"),sliderSection2=document.getElementById("slider-2");let sliderContent1=document.querySelectorAll(".slider-content1"),sliderContent2=document.querySelectorAll(".slider-content2"),sliderContentLast1=sliderContent1[sliderContent1.length-1],sliderContentLast2=sliderContent2[sliderContent2.length-1];sliderSection1.insertAdjacentElement("afterbegin",sliderContentLast1),sliderSection2.insertAdjacentElement("afterbegin",sliderContentLast2),document.querySelectorAll(".slider-content2")[0].classList.add("js-opacity-0"),document.querySelectorAll(".slider-content2")[2].classList.add("js-opacity-0");const btnRight=document.getElementById("btnRight"),btnLeft=document.getElementById("btnLeft");function next(){let e=document.querySelectorAll(".slider-content1")[0],t=document.querySelectorAll(".slider-content2")[0];sliderSection1.style.marginLeft="-200%",sliderSection2.style.marginLeft="-200%",sliderSection1.style.transition="all 0.5s",sliderSection2.style.transition="all 0.5s",document.querySelectorAll(".slider-content2")[1].style.opacity=0,document.querySelectorAll(".slider-content2")[1].style.transition="opacity .1s",document.querySelectorAll(".slider-content2")[2].style.opacity=1,document.querySelectorAll(".slider-content2")[2].style.transition="opacity 2s",setTimeout(()=>{sliderSection1.style.transition="none",sliderSection2.style.transition="none",sliderSection1.style.marginLeft="-100%",sliderSection2.style.marginLeft="-100%",sliderSection1.insertAdjacentElement("beforeend",e),sliderSection2.insertAdjacentElement("beforeend",t)},500)}function prev(){let e=document.querySelectorAll(".slider-content1"),t=document.querySelectorAll(".slider-content2"),n=e[e.length-1],l=t[t.length-1];sliderSection1.style.marginLeft="0",sliderSection2.style.marginLeft="0",document.querySelectorAll(".slider-content2")[0].style.opacity=1,document.querySelectorAll(".slider-content2")[0].style.transition="opacity 2s",document.querySelectorAll(".slider-content2")[1].style.opacity=0,document.querySelectorAll(".slider-content2")[1].style.transition="opacity .1s",sliderSection1.style.transition="all 0.5s",sliderSection2.style.transition="all 0.5s",setTimeout(()=>{sliderSection1.style.transition="none",sliderSection2.style.transition="none",sliderSection1.insertAdjacentElement("afterbegin",n),sliderSection2.insertAdjacentElement("afterbegin",l),sliderSection1.style.marginLeft="-100%",sliderSection2.style.marginLeft="-100%"},500)}btnRight.addEventListener("click",()=>{next()}),btnLeft.addEventListener("click",()=>{prev()});