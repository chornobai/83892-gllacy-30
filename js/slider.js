let controls = document.querySelectorAll(".controls-btn");
let slides = document.querySelectorAll(".slider-item");


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
		slides[i].classList.add("slide-current")
		item.classList.add("current")
	})
})