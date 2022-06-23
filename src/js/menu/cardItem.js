export class CardItem {

    constructor(title, content, {src, alt}, price) {
        this.title = title;
        this.content = content;
        this.imageSrc = src;
        this.imageAlt = alt;
        this.price = price;
    }

    render() {
        return `
            <div class="menu__item">
                <img src="${this.imageSrc}" alt="${this.imageAlt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.content}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.convertToUAH()}</span> грн/день</div>
                </div>
            </div>
        `;
    }

    convertToUAH() {
        return new Number(this.price * 27);
    }
}