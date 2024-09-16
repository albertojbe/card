class CardContacts extends HTMLElement{
    constructor(){
        super();
        
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.append(this.style())
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")
        
        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card__contatos")

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card__image")

        // titulo
        cardLeft.innerHTML = "<h2>Contatos</h2>"

        //links card left
        const instagram = document.createElement("a")
        instagram.href = this.getAttribute("instagram")
        instagram.textContent = "Instagram"

        const whatsapp = document.createElement("a")
        whatsapp.href = this.getAttribute("whatsapp")
        whatsapp.textContent = "Whatsapp"

        const linkedin = document.createElement("a")
        linkedin.href = this.getAttribute("whatsapp")
        linkedin.textContent = "LinkedIn"
        
        cardLeft.appendChild(instagram)
        cardLeft.appendChild(whatsapp)
        cardLeft.appendChild(linkedin)

        // image card right
        const profileImg = document.createElement("img")
        profileImg.src = this.getAttribute("profileImg") || "https://thumbs.dreamstime.com/z/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg?w=768"
        profileImg.alt = this.getAttribute("alt")

        cardRight.appendChild(profileImg)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        return componentRoot;
    }
    style(){
        const style = document.createElement("style")
        style.textContent = `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Helvetica;
}


.card{
    display: flex;
    flex-direction: row;
    background-color: #0000001e;
    border-radius: 10px;
    padding: 20px;
    width: 350px;
    height: 205px;
    border-color: rgb(32, 68, 68);
    -webkit-box-shadow: 13px 7px 18px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 13px 7px 18px -3px rgba(0,0,0,0.75);
    box-shadow: 13px 7px 18px -3px rgba(0,0,0,0.75);
}
.card__contatos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}

.card__image{
    display: flex;
    position: relative;
    left: 80px;
    
}
.card__image > img{
    position: relative;
    width: 120px;
    border-radius: 5px;
    height: auto;
    object-fit: cover;
}

.card__contatos > a{
    color: white;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    padding: 10px;
    margin-bottom: 5px;
    background-color: rgba(0, 0, 255, 0.479);
    position: relative;
    left: 25px;
}
.card__contatos > a:hover{
    background-color: rgba(0, 0, 255, 0.774)
}

.card__contatos > h2{
    color: rgba(0, 0, 0, 0.562);
    position: relative;
    top: -5px;
    left: 23px;
}`
        return style;
    }
}

customElements.define("card-contacts", CardContacts)