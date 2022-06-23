import { showThanksModal } from "./modals";

export function sendFormRequestListener(form) {

    form.addEventListener('submit', e => {
        e.preventDefault();
                
        const spinnerElem = document.createElement('div');
        spinnerElem.innerHTML = "SPINNER";
        form.insertAdjacentElement('afterend', spinnerElem);

        setTimeout(() => {
            form.reset();
            spinnerElem.remove();
            showThanksModal('Success. Thank you.');
        }, 2000);
    });
}