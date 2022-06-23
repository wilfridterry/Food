import { CardItem } from "./cardItem.js";

export class MenuCard {
    constructor(cards) {
        this.cards = cards;
        this.container = document.querySelector('.menu__field>.container');
    }

    render() {
        this.cards.forEach(card => {
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
}