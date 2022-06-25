import { showThanksModal } from "./modals";
import { post } from './request';
import axios from "axios";

export function bindFormRequestListeners(form) {

    for (let form of document.forms) {
        bindFormListener(form)
    }
}

function bindFormListener(form) {
    form.addEventListener('submit', async e => {
        e.preventDefault();
                
        const spinnerElem = document.createElement('div');
        spinnerElem.innerHTML = "SPINNER";
        form.insertAdjacentElement('afterend', spinnerElem);

        const formdata = new FormData(form);

        const data = Object.fromEntries(formdata.entries());
        
        try {
            await axios.post('http://localhost:3000/contact-us', data);

            spinnerElem.remove();
            showThanksModal('Success. Thank you.');
        } catch(e) {
            showThanksModal(e);
        }

        form.reset();
    });
}