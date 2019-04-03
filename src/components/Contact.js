import React from 'react';

import Form from '../components/Form';

import Title from '../helpers/Title';

export default class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pt: {
        titulo: "Fale conosco",
        texto: "Tem alguma dúvida? Sugestão? Reclamação? Entre em contato!"
      },
      en: {
        titulo: "Contact us",
        texto: "Do you have any doubt? Suggestion? Complaint? Contact us!"
      }
    }
  }

  language(){
    const controle = localStorage.getItem('lingua');
    const lang = navigator.language;

    if(controle === undefined){
        if(lang === 'pt-BR' || lang === 'pt'){
            return this.state.pt;
        } else {
            return this.state.en;        
        }
    } else {
        if(controle === 'pt'){
            return this.state.pt;
        } else {
            return this.state.en;        
        }
    }
  }
  
  render() {
    return (
      <section className="contact">
        <div className="container">
            <div className="contact__container">
                <Title titulo={this.language().titulo} cor="branco" />
                <p className="text">{ this.language().texto }</p>
            </div>
            <Form />
         </div>
      </section>
    );
  }
}