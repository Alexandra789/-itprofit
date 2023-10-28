const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.modal-window-btn');
const closeBtn = document.querySelector('.modal__close-button');

function toggleModal() {
	modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);