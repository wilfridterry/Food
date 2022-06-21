document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(el => {
            el.classList.remove('show', 'fade');
            el.classList.add('hide');
        });

        tabs.forEach(el => {
            el.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabheader__item')) {
            tabs.forEach((el, i) => {
                if (el == e.target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    function setTimer(selector, deadline) {
        const el = document.querySelector(selector);
        const daysEl = el.querySelector('#days');
        const hoursEl = el.querySelector('#hours');
        const minutesEl = el.querySelector('#minutes');
        const secondsEl = el.querySelector('#seconds');

        resetTimer(daysEl, hoursEl, minutesEl, secondsEl);

        const timer = setInterval(() => {
            const remainder = getTimeRemaining(deadline);

            daysEl.innerHTML = outputTime(remainder.days);
            hoursEl.innerHTML = outputTime(remainder.hours);
            minutesEl.innerHTML = outputTime(remainder.minutes);
            secondsEl.innerHTML = outputTime(remainder.seconds);

            if (remainder.total < 0) {
                clearInterval(timer);
                resetTimer(daysEl, hoursEl, minutesEl, secondsEl);
            }
        }, 1000);    

        
        function getTimeRemaining(deadline) {

            let delta = (Date.parse(deadline) - Date.parse(new Date()))/1000;

            const days = Math.floor(delta / (60 * 60 * 24));
            const hours = Math.floor(delta / (60 * 60)  % 24);
            const minutes = Math.floor(delta / 60 % 60);
            const seconds = Math.floor(delta % 60);    

            return {
                total: delta,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };;
        }

        function outputTime(number) {
            return number > 9 ? number : `0${number}`; 
        }
        
        function resetTimer(...elements) {
            elements.forEach(el => {
                el.innerHTML = '00';
            });
        }
    }

    setTimer('.promotion__timer', '09-01-2022');

    const openModalId = setTimeout(() => openModal('#contact-us'), 6000);

    document.addEventListener('click', e => {
        if (e.target.dataset.modal != undefined) {
            openModal(`#${e.target.dataset.modal}`);
        }
    });
    
    function openModal(selector) {
        const modal = document.querySelector(selector);
        document.documentElement.style.overflow = 'hidden';
        modal.classList.add('modal__active');
        clearInterval(openModalId);
    }

    document.addEventListener('click', e => {
        const modal = e.target.closest('.modal');
        if (
            e.target.dataset.modalClose != undefined ||
            e.target == modal
        ) {
            closeModal(modal);
        }
    });

    document.addEventListener('keydown', e => {
        if (e.code == 'Escape') {
            const activeModals = document.querySelectorAll('.modal__active');
            activeModals.forEach(modal => {
                closeModal(modal);
            });
        }
    });

    function closeModal(modal) {
        document.documentElement.style.overflow = '';
        modal.classList.remove('modal__active');
    }

    function showModalByScroll() {
        const docElem = document.documentElement;
        const windowHeight = docElem.scrollHeight - docElem.clientHeight;

        if (docElem.scrollTop >= windowHeight-1) {
            openModal('#contact-us');
            document.removeEventListener('scroll', showModalByScroll);
        }
    }

    document.addEventListener('scroll', showModalByScroll);
});