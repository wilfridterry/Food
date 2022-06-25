import { CardItem } from "./cardItem.js";
import { get } from './../request.js';

export class MenuCard {
    constructor() {
        this.container = document.querySelector('.menu__field>.container');
    }

    async render() {
        const cards = await this.sendCardsGetRequest();

        cards.forEach(({title, content, image, price }) => {

            const cardItem = new CardItem(title, content, image, price);
    
            this.container
                .insertAdjacentHTML('beforeend', cardItem.render());
        });
    }

    async sendCardsGetRequest() {
        let response = [];

        try {
            response = await get('http://localhost:3000/menu');    
        } catch (e) {
            console.log(e)
        }

        return response;
    }
}