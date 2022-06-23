import { initTabs } from './tabs';
import { setTimer } from './timer';
import { initModals } from './modal';
import cards from './menu/cards';
import { MenuCard } from './menu/menuCard';

document.addEventListener("DOMContentLoaded", () => {

    initTabs();
    setTimer('.promotion__timer', '09-01-2022');
    initModals();    

    new MenuCard(cards).render();
});



