import React from 'react';

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pt: {
        nome: "Nome",
        email: "E-mail",
        mensagem: "Mensagem",
        botao: "Envie sua mensagem"
      },
      en: {
        nome: "Name",
        email: "Email",
        mensagem: "Message",
        botao: "Send your message"
      }
    }
  }

  language(){
    const lang = navigator.language;

    if(lang === 'pt-BR' || lang === 'pt'){
      return this.state.pt;
    } else {
      return this.state.en;        
    }
  }

  render() {
    return (
        <form className="form" action="" method="POST">
            <input className="input" type="text" name="Nome" placeholder={this.language().nome} required />
            <input className="input" type="email" name="Email" placeholder={this.language().email} required />
            <textarea className="input" name="Mensagem" placeholder={this.language().mensagem} rows={4} required></textarea>
            <input className="button" type="submit" value={this.language().botao} />
        </form>
    );
  }
}