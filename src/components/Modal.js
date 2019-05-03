import React from 'react';

import Title from '../helpers/Title';

export default class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
        <div 
          className="modal" 
          onLoad={(event) => {
            document.addEventListener('keydown', (event) => {              
              if (event.keyCode !== 27) 
              return;

              this.props.closeModal()
            })
          }}
        >
          <div className="modal__close" onClick={this.props.closeModal}></div>
          <div className="modal__box">
            <button onClick={this.props.onClose}>&#9747;</button>
            <div className="modal__card">
              <img src={this.props.foto} alt="" />
              <Title 
                titulo={this.props.nome} 
                subtitulo={this.props.cidade === undefined ? "Global" : this.props.cidade}                
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