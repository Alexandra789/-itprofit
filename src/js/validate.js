const REGEXP_EMAIL = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const formInputWrappers = document.querySelectorAll('.input-wrapper');
const formBtn = document.querySelector('.form__btn');
const inputEmail = document.querySelector('#inputEmail');
const errorTextRequiredFields = 'Поле должно быть заполнено';
const errorTextEmail = 'Поле заполнено неккоректно';
formBtn.addEventListener('click', (e) => {
	e.preventDefault();

	formInputWrappers.forEach(field => {
		const input = field.querySelector('.form__input');
		const error = field.querySelector('.form__error');
		!input.value ? addError(field, error, errorTextRequiredFields) : removeError(field, error);
	});

	if (inputEmail.value) {
		const [isCorrectEmail, field, error] = checkEmailValidate();
		isCorrectEmail ? removeError(field, error) : addError(field, error, errorTextEmail);
	}
})

const checkEmailValidate = () => {
	const isCorrectEmail = REGEXP_EMAIL.test(inputEmail.value);
	const field = inputEmail.parentElement;
	const error = inputEmail.parentElement.querySelector('.form__error');
	return [isCorrectEmail, field, error];
}

const addError = (field, error, textError) => {
	field.classList.add('error');
	error.innerText = textError;
}
const removeError = (field, error) => {
	field.classList.remove('error');
	error.innerText = '';
}
