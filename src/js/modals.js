const openModalId = setTimeout(() => openModal('#contact-us'), 50000);

export function initModals() {

    document.addEventListener('click', e => {
        if (e.target.dataset.modal != undefined) {
            openModal(`#${e.target.dataset.modal}`);
        }
    });
    
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

    document.addEventListener('scroll', showModalByScroll);
}

export function closeModal(modal) {
    document.documentElement.style.overflow = '';
    modal.classList.remove('modal__active');
}

export function openModal(selector) {
    const modal = document.querySelector(selector);
    document.documentElement.style.overflow = 'hidden';
    modal.classList.add('modal__active');
    clearInterval(openModalId);
}

function showModalByScroll() {
    const docElem = document.documentElement;
    const windowHeight = docElem.scrollHeight - docElem.clientHeight;

    if (docElem.scrollTop >= windowHeight-1) {
        openModal('#contact-us');
        document.removeEventListener('scroll', showModalByScroll);
    }
}

export function showThanksModal(message) {
    const modal = document.querySelector('#contact-us'); 
    openModal('#contact-us');
    
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-modal-close>&times;</div>
            <div class="modal__title">${message}</div>
        </div>
    `;

    modal.prepend(thanksModal);

    setTimeout(() => {
        thanksModal.remove();
        closeModal(modal);
        prevModalDialog.classList.remove('hide');
    }, 4000);
}