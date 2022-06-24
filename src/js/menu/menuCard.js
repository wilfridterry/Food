import { CardItem } from "./cardItem.js";

export class MenuCard {
    constructor() {
        this.container = document.querySelector('.menu__field>.container');
    }

    async render() {
        const cards = await this.sendCardsGetRequest();

        cards.forEach(card => {
            const cardItem = new CardItem(
                    card.title,
                    card.content,
                    card.image,
                    card.price
                );
            
            this.container
                .insertAdjacentHTML('beforeend', cardItem.render());
        });
    }

    async sendCardsGetRequest() {
        const response = await fetch('http://localhost:3000/menu');
        const cards = await response.json();

        return cards;
    }
}