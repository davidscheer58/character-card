import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker'; 


const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class CharacterCard extends LitElement{
  static properties = {
    characterName: {
      type: String,
      reflect: true
    },
    cardDetails:{
      type: String, 

    },
    topText:{
      type: String,
      reflect: true
    },
    bottomText:{
      type: String, 
      reflect:true
    },
    subtitle: {
      type: String,
      reflect: true, 
    },
    img: {
      type: String, 
      reflect: true, 
    }
   
  };


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
    
    
      
     .btn {
        margin: 1px 10px 50px; 
        border: 2px solid red; 
        text-transform: uppercase; 
        padding: 8px 8px; 
       }
       .detailButton{
        margin: 1px; 
        position: center; 
       }
       button:hover, 
       buttons:focus{
        background-color:blue;
       }

       meme-maker{
        border-radius: 10px; 
        border:solid white; 
        width: 400px; 

       }

       @media (min-width: 500px) and (max-width: 800px){
        .detailButton{
          display:none; 
        }
       }
       @media (max-width: 500px){
      .card {
       transform: scale(0.8); 
      }
      .card_paragraph {
        visibility: hidden;
      }
    }
    
    `; 

   
  }
    
constructor() {
  super(); 
  this.characterName = "Spongebob"; 
  this.characterDetails = "Spoinkboink owns the world."
  this.img= "https://cdn.drawception.com/drawings/QrLtCOH6rL.png"
}


  render() {
    return html`
    
  <div class="card">
    <h2 class="header">Spongebob </h2>
    ${this.characterName}
  </h1>
  <slot name= "subtitle"></slot>
   <img src= https://cdn.drawception.com/drawings/QrLtCOH6rL.png>
   


    <p class="paragraph">
      ${this.characterDetails}
   </p>
   <slot name = "img"></slot>
  </div>
    `; 
  }

}

customElements.define('character-card', CharacterCard);