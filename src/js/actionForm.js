import {API} from './api';
import {createNotification} from "./notification";

export const sendForm = async () => {
	const form = document.querySelector('#form');
	form.classList.add('sending');
	const response = await API();
	if (response.ok) {
		const result = await response.json();
		form.classList.remove('sending');
		createNotification(result);
	} else {
		const result = await response.json();
		form.classList.remove('sending');
		createNotification(result);
	}
}