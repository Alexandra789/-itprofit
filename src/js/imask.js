import IMask from "imask";

const phoneInput = document.querySelector("#inputPhone");

const phoneMask = new IMask(phoneInput, {
	mask: "+{000}(00)000-00-00",
});
