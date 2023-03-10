import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker';



export class CharacterCard extends LitElement {
  static get properties() {
    return {
      characterName: {
        type: String, 
      }, 
      spoinkboinkDetails: {
        type: String,
      },

      topText: {
        type: String, 
      },

      bottomText: {
        type: String,
      },

      subtitle: {
        type: String, 
      },

      img: {
        type: String,  
      },
      
    }
  }

  static get styles() {
    return css`
      body {
  background: cyan; 
}

.all{
  border-style: dotted;
  border-color: #89CFF0;
  
  text-align: center;
  padding: 20px;
  border-width: 10px;
  width: 400px;
  max-width: 500px;
  margin: auto;
  background-color: pink;
  margin-top: 10px;
}
.text { 
  font-size: 16px;
  color: black;
}
.title{
  font-size: 40px;
}
.buttons{
  text-align: center; 
  padding: 5px;
}
.detailButton {
  margin: 1px;
  position: center; 
}
button:hover,
buttons:focus{
  background-color: blue
}
.picture {
  border-radius: 15px;
  border: #053f5a;
  width: 400px;
  align-items: center;
}


@media (min-width: 500px) and (max-width: 800px) {
    
    .detailButton {
      display: none;
    }
  }
@media (max-width: 500px) {
  .all{
    transform: scale(0.8);
  }
}
    `;
  }

  constructor() { 
    super();
    this.characterName = "Spoinkboink";
    this.characterDetails = "Spoinkboink rules the world"
   
    this.img = "https://cdn.drawception.com/drawings/QrLtCOH6rL.png"
  }

  render() {
    return html`
  <div class="all" part= "all">
  <h1 class="title">
  ${this.characterName}
</h1>
  <slot name = "subtitle"></slot>
  <img src = "https://cdn.drawception.com/drawings/QrLtCOH6rL.png" width=300px>
  
  <details>
  <summary>Character Details</summary>
  <p class ="text">
    ${this.characterDetails}
  </p>
</details>


  <slot name = "img"></slot>
</div>
    `;
  }
}

customElements.define('character-card3', CharacterCard);