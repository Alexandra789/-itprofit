import {API} from './api';
import {createNotification} from "./notification";

const form = document.querySelector('#form');
export const sendForm = async () => {
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