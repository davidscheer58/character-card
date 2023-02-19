import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class CharacterCard extends LitElement{
  static properties = {
    version: {}, 
  };
  constructor(){
    super(); 
    this.version= "Starting" 
  }

  static get styles() {
    return css`
    .card {
      width: 600px;
      height: 600px;
      border: 5px dashed black;
      margin: 20px;
      padding: 20px;
       background-color: rgb(120,45,99);
        text-align: center;
    }
    
    img {
      width: 100%;
    }
    
    .card_title {
      text-align: left;
      font-family: sans-serif;
      font-weight: bold;
      font-size: 25px;
    }
    
    .card_paragraph{
      Text-align: left;
      font-family: sans-serif;
      font-weight: bold; 
      font-size: 15px; 
    
    }
    
    @media screen and (max-width: 500px){
      .card {
        width: 100%;
        border: 5px solid red;
        margin: 20px;
        padding: 20px;
      }
      
     .btn {
        margin: 1px 10px 50px; 
        border: 2px solid red; 
        text-transform: uppercase; 
        padding: 8px 8px; 
       }
    
      .card_paragraph {
        visibility: hidden;
      }
    }
    
    `
    
    
    
    
    
    
      
    
      
     
      
    
    
    
      
  }
    

  render() {
    return html`
    
  <div class="card">
    <h2 class="header">Spongebob</h2>
    <img class="image" alt="Spoinkboink"
    src=https://cdn.drawception.com/drawings/QrLtCOH6rL.png>
    <p class="paragraph">
      This image depicts the one the great Spongebob. He is the greatest of them all.
   </p>
   <slot> 
      
    </slot>
    <button class="details" @click=${this.details}>Details</button>
  </div>
  

    `;

    
  }

}

customElements.define('character-card', CharacterCard);