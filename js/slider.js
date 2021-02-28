let controls = document.querySelectorAll(".controls-btn");
let slides = document.querySelectorAll(".slider-item");
let bodyBg  = document.querySelector(".page-body")
let firstButtonBg = document.querySelector(".first-slide");
let secondButtonBg = document.querySelector(".second-slide");
let thirdButtonBg = document.querySelector(".third-slide");



let resetCurrentSlides = () =>{
	slides.forEach((item) => {
		item.classList.remove("slide-current")
	})
	controls.forEach((item) => {
		item.classList.remove("current")
	})
}

controls.forEach((item,i) => {
	item.addEventListener('click', ()=>{
		resetCurrentSlides();
		if(item.classList.contains("first-slide")){
			bodyBg.classList.remove("site-slide-3", "site-slide-2");
			bodyBg.classList.add("site-slide-1");
		}
		if(item.classList.contains("second-slide")){
			bodyBg.classList.remove("site-slide-1", "site-slide-3");
			bodyBg.classList.add("site-slide-2");
		}

		if(item.classList.contains("third-slide")){
			bodyBg.classList.remove("site-slide-2", "site-slide-1");
			bodyBg.classList.add("site-slide-3");
		}

		slides[i].classList.add("slide-current")
		item.classList.add("current")

	})
})
