const tabsContent = document.querySelectorAll('.tabcontent');
const tabs = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelector('.tabheader__items');


export function initTabs() {

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
} 

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