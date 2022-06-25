import { initTabs } from './tabs';
import { setTimer } from './timer';
import { initModals } from './modals';
import { MenuCard } from './menu/menuCard';
import { bindFormRequestListeners } from './bindFormRequestListeners';

document.addEventListener("DOMContentLoaded", () => {

    initTabs();
    setTimer('.promotion__timer', '09-01-2022');
    initModals();    

    new MenuCard().render();

    bindFormRequestListeners();
    
    initSlide();
});

function initSlide() {

    const slides = document.querySelectorAll('.offer__slide');
    let slideIndex = 0;

    slides[slideIndex].style.display = 'block';
    setCounterOfSlider();

    document.querySelector('.offer__slider-next').addEventListener('click', () => {        
        if (slideIndex == (slides.length-1)) {
            return;
        }

        slides[slideIndex].style.display = 'none';
        slides[slideIndex+1].style.display = 'block';
        slideIndex++;
        setCounterOfSlider();
    });

    document.querySelector('.offer__slider-prev').addEventListener('click', () => {
        
        if (slideIndex <= 0) {
            return;
        }

        slides[slideIndex].style.display = 'none';
        slides[slideIndex-1].style.display = 'block';
        slideIndex--;
        setCounterOfSlider();
    });
    
    function setCounterOfSlider() {
        document.querySelector('.offer__slider-counter>#current').innerHTML = (slideIndex+1);
    }
}





