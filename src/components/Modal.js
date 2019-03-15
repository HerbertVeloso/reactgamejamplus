import React from 'react';

import Title from '../helpers/Title';

export default class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
        <div className="modal">
          <div className="modal__box">
            <button onClick={this.props.onClose}>&#9747;</button>
            <div className="modal__card">
              <img src={this.props.foto} alt="" />
              <Title 
                titulo={this.props.nome} 
                subtitulo={this.props.cidade === undefined ? "Geral" : this.props.cidade}                
              />
            </div>
            <p className="modal__text">
              {this.props.texto}
            </p>
          </div>
        </div>
    );
  }
}