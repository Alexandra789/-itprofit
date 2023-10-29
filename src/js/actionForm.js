import {API} from './api';
import {createNotification} from "./notification";

const body = document.querySelector('body');
const form = document.querySelector('#form');
const labels = document.querySelectorAll('.form__label');

export const sendForm = async () => {
	addSendingForm();
	const response = await API();
	if (response.ok) {
		const result = await response.json();
		removeSendingForm();
		resetForm();
		createNotification(result);
	} else {
		const result = await response.json();
		removeSendingForm();
		createNotification(result);
	}
}

const resetForm = () => {
	labels.forEach(label => {
		form.reset();
		label.classList.remove('top');
	})
}

const addSendingForm = () => {
	form.classList.add('sending');
	body.classList.add('hidden');
}

const removeSendingForm = () => {
	form.classList.remove('sending');
	body.classList.remove('hidden');
}
