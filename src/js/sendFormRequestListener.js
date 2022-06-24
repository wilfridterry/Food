import { showThanksModal } from "./modals";

export function sendFormRequestListener(form) {

    form.addEventListener('submit', e => {
        e.preventDefault();
                
        const spinnerElem = document.createElement('div');
        spinnerElem.innerHTML = "SPINNER";
        form.insertAdjacentElement('afterend', spinnerElem);

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                if (response.status > 400) {
                    throw Error('Internal error');
                }
                return response.json();
            })
            .then(json => {
                form.reset();
                spinnerElem.remove();
                showThanksModal('Success. Thank you.');
            })
            .catch((err) => {
                showThanksModal(err);
            })
            .finally(() => {
                form.reset();
            });
    });
}