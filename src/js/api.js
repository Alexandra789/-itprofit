const URL = 'http://localhost:9090/api/registration';

export const API = async () => {
	let formData = new FormData(document.querySelector('#form'));
	return await fetch(URL, {
		method: 'POST',
		body: formData,
	})
}