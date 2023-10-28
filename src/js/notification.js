export function createNotification(result) {
	const notification = document.createElement('DIV');
	const imageNotification = document.createElement('img');
	imageNotification.src =
		result.status === 'success' ? 'https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png' :
			'https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png';
	imageNotification.classList.add('notification__image');
	const textNotification = result.message;
	notification.classList.add('notification');
	notification.innerHTML = textNotification;
	notification.appendChild(imageNotification);
	document.body.appendChild(notification);
	setTimeout(() => {
		notification.remove();
	}, 5000);
}