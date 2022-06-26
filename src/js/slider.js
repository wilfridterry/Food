export class Slider {
    slideIndex = 0;
    
    constructor(selector) { 
        this.container = document.querySelector(selector);
        
        this.#init();
    }

    #init() {
        this.slideWidth = this.container.querySelector('.offer__slider-wrapper').clientWidth;
        this.total = this.container.querySelectorAll('.offer__slide').length;

        this.viewport = this.container.querySelector('.offer__slider-container'); 
        this.viewport.style.width = (this.total * this.slideWidth) + 'px';

        this.prev = this.container.querySelector('.offer__slider-prev');
        this.next = this.container.querySelector('.offer__slider-next'); 

        this.container.querySelector('.offer__slider-counter>#total').innerHTML = this.#convertCounter(this.total);
        this.currentSlide = this.container.querySelector('.offer__slider-counter>#current');

        this.#setCurrentSlide();

        this.next.onclick = this.onClickNext.bind(this);
        this.prev.onclick = this.onClickPrev.bind(this);
    }

    onClickNext(e) {
        if (this.slideIndex == (this.total-1)) {
            this.slideIndex = 0;
        } else {
            this.slideIndex++;
        }

        this.#slideItem();
        this.#setCurrentSlide();
    }

    onClickPrev(e) {
        if (this.slideIndex == 0) {
            return;
        }

        this.slideIndex--;
        this.#slideItem();
        this.#setCurrentSlide();
    }

    #setCurrentSlide() {
        this.currentSlide.innerHTML = this.#convertCounter(this.slideIndex + 1);
    }
    
    #slideItem() {
        this.viewport.style.transform = `translateX(-${(this.slideWidth * this.slideIndex)}px)`; 
    }

    #convertCounter(num) {
       return num > 9 ? num : `0${num}`;
    }
}