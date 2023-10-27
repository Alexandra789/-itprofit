import {sendForm} from './actionForm';

const REGEXP_EMAIL = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const formInputWrappers = document.querySelectorAll('.input-wrapper');
const form = document.querySelector('#form');
const errorTextRequiredFields = 'Поле должно быть заполнено';
const errorTextEmail = 'Поле заполнено неккоректно';

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let errorCount = formValidate();
	if (!errorCount) {
		sendForm();
	}
})

const formValidate = () => {
	let errorCount = 0;

	const checkEmailValidate = (inputEmail, field, error) => {
		let isCorrectEmail = REGEXP_EMAIL.test(inputEmail.value);
		isCorrectEmail ? removeError(field, error) : addError(field, error, errorTextEmail);
	}

	const addError = (field, error, textError) => {
		field.classList.add('error');
		error.innerText = textError;
		errorCount++
	}

	const removeError = (field, error) => {
		field.classList.remove('error');
		error.innerText = '';
	}

	formInputWrappers.forEach(field => {
		const input = field.querySelector('.form__input');
		const error = field.querySelector('.form__error');
		!input.value.trim() ? addError(field, error, errorTextRequiredFields) : removeError(field, error);
		if (input.classList.contains('email') && input.value.trim()) {
			checkEmailValidate(input, field, error);
		}
	});
	return errorCount;
}