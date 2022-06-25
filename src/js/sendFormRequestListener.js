import { showThanksModal } from "./modals";
import { post } from './request';

export function sendFormRequestListener(form) {

    form.addEventListener('submit', async e => {
        e.preventDefault();
                
        const spinnerElem = document.createElement('div');
        spinnerElem.innerHTML = "SPINNER";
        form.insertAdjacentElement('afterend', spinnerElem);

        const formdata = new FormData(form);

        const data = Object.fromEntries(formdata.entries());
        
        try {
            const json = await post('http://localhost:3000/contact-us', data);

            spinnerElem.remove();
            showThanksModal('Success. Thank you.');
        } catch(e) {
            showThanksModal(e);
        }

        form.reset();
    });
}