import React from 'react';

import Title from '../helpers/Title';

export default class TransparentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          pt: {
            titulo: "Próxima edição",
            subtitulo1: "Etapa Regional",
            texto1: "02 a 04 de agosto de",
            subtitulo2: "Etapa Final",
            texto2: "Novembro de "
          },
          en: {
            titulo: "Next edition",
            subtitulo1: "Regional Qualifiers",
            texto1: "2 to 4 of August ",
            subtitulo2: "Final",
            texto2: "November "
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
      
    render(){
        return(
            <div className="transparentBox">
                <Title titulo={this.language().titulo} subtitulo="Game Jam +" cor="branco" />
                <h2>{ this.language().subtitulo1 }</h2>
                <p>
                    { this.language().texto1 }
                    <span>2019</span>
                </p>
                <h2>{ this.language().subtitulo2 }</h2>
                <p>
                    { this.language().texto2 }
                    <span>2019</span>
                </p>
            </div>
        );
    }
}