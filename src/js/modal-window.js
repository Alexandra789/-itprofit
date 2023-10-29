const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.modal-window-btn');
const closeBtn = document.querySelector('.modal__close-button');
const body = document.querySelector('body');

function toggleModal() {
	modal.classList.toggle('show-modal');
	body.classList.toggle('hidden');
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);