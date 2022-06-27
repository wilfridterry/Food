import { initTabs } from './tabs';
import { setTimer } from './timer';
import { initModals } from './modals';
import { MenuCard } from './menu/menuCard';
import { bindFormRequestListeners } from './bindFormRequestListeners';
import { Slider }  from './slider';
import { handleCalorieCalculating } from './calorie-calculator/handleCalorieCalculating';

document.addEventListener("DOMContentLoaded", () => {

    initTabs();
    setTimer('.promotion__timer', '09-01-2022');
    initModals();    

    new MenuCard().render();

    bindFormRequestListeners();

    new Slider('.offer__slider').init(); 

    handleCalorieCalculating();
});

