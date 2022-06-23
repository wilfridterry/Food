export function initModals() {
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
}