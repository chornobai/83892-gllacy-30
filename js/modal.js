const feedbackButton = document.querySelector(".btn-contacts");
const feedbackForm = document.querySelector(".modal-feedback");
const feedbackClose = feedbackForm.querySelector(".feedback-close");
const feedbackNameField = feedbackForm.querySelector("[name=feedback-name]");
const feedbackEmailField = feedbackForm.querySelector("[name = feedback-email]");
const feedbackTextareaField = feedbackForm.querySelector("[name = feedback-text]");
const formFeedback = feedbackForm.querySelector(".feedback-form");

let isStorageSupport = true;
let storage = "";

// Проверка - поддерживает ли браузер запись в LocalStorage //

try{
	storage = localStorage.getItem ("name");
} catch (err) {
	isStorageSupport = false;
}

// Открытие модального окна //

feedbackButton.addEventListener("click", function(evt){
	evt.preventDefault();
	feedbackForm.classList.add("modal-show");
	if (storage) {
		feedbackNameField.value = storage;
		feedbackEmailField.value = storage;
		feedbackTextareaField.focus();
	} else {
	feedbackNameField.focus();
}
});

// Закрытие модального окна и снятия класса с анимацией //
 
feedbackClose.addEventListener("click", function(evt){
	evt.preventDefault();
	feedbackForm.classList.remove("modal-show");
	feedbackForm.classList.remove("modal-error");
});

// Проверка валидности формы, добавление анимации, запись в LocalStorage // 
formFeedback.addEventListener("submit", function (evt){
	if (!feedbackNameField.value || !feedbackEmailField.value || !feedbackTextareaField.value){
	evt.preventDefault();
	feedbackForm.classList.remove("modal-error");
	feedbackForm.offsetWidth = feedbackForm.offsetWidth;
	feedbackForm.classList.add("modal-error");
	} else {
		if (isStorageSupport){
		localStorage.setItem("name", feedbackNameField.value);
		localStorage.setItem("email", feedbackEmailField.value);
		}
	}
})
// Закрытие модального окна клавишей ESC //
window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27){
		if(feedbackForm.classList.contains("modal-show")){
			evt.preventDefault();
			feedbackForm.classList.remove("modal-show");
			feedbackForm.classList.remove("modal-error");
		}
	}
})