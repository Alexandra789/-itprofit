import {API} from './api';

export const sendForm = async () => {
	const form = document.querySelector('#form');
	form.classList.add('sending');
	const response = await API();
	if (response.ok) {
		const result = response.json();
		console.log('ok')
		form.classList.remove('sending');
	} else {
		console.log('ne ok');
		form.classList.remove('sending');
	}
}