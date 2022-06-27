export class Slider {
    slideIndex = 0;
    container;
    wrapper;
    total;
    viewport;
    listDotsContainer;
    listDots;
    prev;
    next;
    currentSlide;

    constructor(selector) { 
        this.container = document.querySelector(selector);        
    }

    init() {
        this.wrapper = this.container.querySelector('.offer__slider-wrapper');
        this.slideWidth = this.wrapper.clientWidth;
        this.total = this.container.querySelectorAll('.offer__slide').length;

        this.viewport = this.container.querySelector('.offer__slider-container'); 
        this.viewport.style.width = (this.total * this.slideWidth) + 'px';

        this.#addDotsNavigation();
        this.prev = this.container.querySelector('.offer__slider-prev');
        this.next = this.container.querySelector('.offer__slider-next'); 

        this.next.onclick = this.onClickNext.bind(this);
        this.prev.onclick = this.onClickPrev.bind(this);
        this.listDotsContainer.onclick = this.onClickDot.bind(this);

        this.container.querySelector('.offer__slider-counter>#total').innerHTML = this.#convertCounter(this.total);
        this.container.querySelector('.dot').classList.add('dot-active');
        this.currentSlide = this.container.querySelector('.offer__slider-counter>#current');
        this.#setCurrentSlide();
    }

    #addDotsNavigation() {
        const listDotsContainer = document.createElement('ul');
        listDotsContainer.classList.add('carousel-indicators');

        for (let i = 0; i < this.total; i++) {
            let dot = document.createElement('li');
            dot.classList.add('dot');
            listDotsContainer.append(dot);
        }

        this.listDotsContainer = listDotsContainer;
        this.wrapper.append(listDotsContainer);
        this.listDots = this.listDotsContainer.querySelectorAll('.dot');
    }

    onClickDot(e) {
        if (e.target.classList.contains('dot')) {

            this.listDots.forEach((dot, index) => {
                if (e.target == dot) {
                    this.slideIndex = index;
                }
            });

            this.#slide();
        }
    }

    onClickNext(e) {
        if (this.slideIndex == (this.total-1)) {
            this.slideIndex = 0;
        } else {
            this.slideIndex++;
        }

        this.#slide();
    }

    onClickPrev(e) {
        if (this.slideIndex == 0) {
            this.slideIndex = (this.total-1)
        } else {
            this.slideIndex--;
        }

        this.#slide();
    }

    #slide() {
        this.#slideItem();
        this.#setCurrentSlide();
        this.#setCurrentDot();
    }
    
    #setCurrentSlide() {
        this.currentSlide.innerHTML = this.#convertCounter(this.slideIndex + 1);
    }
    
    #slideItem() {
        this.viewport.style.transform = `translateX(-${(this.slideWidth * this.slideIndex)}px)`; 
    }

    #setCurrentDot() {
        this.listDots.forEach(dot => dot.classList.remove('dot-active'));
        this.listDots[this.slideIndex].classList.add('dot-active');
    }

    #convertCounter(num) {
       return num > 9 ? num : `0${num}`;
    }
}