import { initTabs } from './tabs';
import { setTimer } from './timer';
import { initModals } from './modals';
import { MenuCard } from './menu/menuCard';
import { sendFormRequestListener } from './sendFormRequestListener';

document.addEventListener("DOMContentLoaded", () => {

    initTabs();
    setTimer('.promotion__timer', '09-01-2022');
    initModals();    

    new MenuCard().render();

    for (let form of document.forms) {
        sendFormRequestListener(form);
    }
});



