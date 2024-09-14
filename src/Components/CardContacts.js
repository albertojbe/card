class CardContacts extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "closed"});
        shadow.innerHTML = "<h1>Hello Guys</h1>";
    }   

}

customElements.define('card-contacts', CardContacts)