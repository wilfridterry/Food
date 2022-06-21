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


    function setTimer(el, deadline) {
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


    setTimer(document.querySelector('.promotion__timer'), '06-01-2022');
});
