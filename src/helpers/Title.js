import React from 'react';

export default class Title extends React.Component {
  render() {
    const branco = {
      color: '#FFF'
    }

    const invisivel = {
      display: 'none'
    }

    return (
      <div 
        className={ this.props.inverse === undefined ? "title" : "title--inverse" } 
        style={ this.props.cor === "branco" ? branco : null } 
      >
          <h2>{ this.props.titulo }</h2>
          <p style={ this.props.subtitulo === undefined ? invisivel : null } >
            { this.props.subtitulo }
          </p>
      </div>
      );
  }
}