const formFields = document.querySelectorAll('.field');

formFields.forEach(field => {
	field.addEventListener('click', (e) => {
		const currentField = e.currentTarget;
		labelAnimation(currentField)
	})
})

const labelAnimation = (currentField) => {
	const input = currentField.children[0];
	const label = currentField.children[1];
	input.focus();
	input.oninput = () => {
		input.value ? label.classList.add('top') : label.classList.remove('top');
	}
}