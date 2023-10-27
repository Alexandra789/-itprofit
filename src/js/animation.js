const formInputWrappers = document.querySelectorAll('.input-wrapper');

formInputWrappers.forEach(field => {
	field.addEventListener('click', (e) => {
		const currentField = e.currentTarget;
		labelAnimation(currentField)
	})
})

const labelAnimation = (currentField) => {
	const input = currentField.querySelector('.form__input');
	const label = currentField.querySelector('.form__label');
	input.focus();
	input.oninput = () => {
		input.value ? label.classList.add('top') : label.classList.remove('top');
	}
}