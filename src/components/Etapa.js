import React from 'react';

import Title from '../helpers/Title';

export default class Etapa extends React.Component {
  render() {
    const style = {
        background: "url(" +  this.props.fundo  + ") center no-repeat ",
        backgroundSize: "cover",
    };
    return (
      <section className="etapa" style={style} id={this.props.id}  data-aos="fade-up">
        <div className="container">
            <Title titulo={this.props.titulo} subtitulo={this.props.subtitulo} cor="branco" />
            <p className="etapa__text">{ this.props.texto }</p>
            { this.props.lista === undefined ? null : (<ul>{ this.props.lista.map( item => {
                return <li>{item}</li>
            })}</ul>) }
        </div>
      </section>
    );
  }
}