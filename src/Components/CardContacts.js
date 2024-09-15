class CardContacts extends HTMLElement{
    constructor(){
        super();
        
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__contatos")
        // Titulo
        // Link to instagram
        const instagram = document.createElement("a");
        instagram.setAttribute("href", componentRoot.setAttribute("instagram"))
        instagram.innerText("Instagram")
        // Link to Whatsapp
        const whatsapp = document.createElement("a");
        whatsapp.setAttribute("href", componentRoot.setAttribute("whatsapp"))
        whatsapp.innerText("Whatsapp")
        // Link to LinkedIn
        const linkedin = document.createElement("a");
        linkedin.setAttribute("href", componentRoot.setAttribute("linkedin"))
        linkedin.innerText("LinkedIn")
        cardLeft.appendChild(instagram); cardLeft.appendChild(whatsapp); cardLeft.appendChild(linkedin);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__image")
        

        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }
    style(){

    }
}

customElements.define("card-contacts", CardContacts)