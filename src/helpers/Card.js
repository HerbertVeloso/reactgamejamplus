import React from 'react';

import Title from '../helpers/Title';

export default class Card extends React.Component {
    render(){
        return(
            <div className="card" onClick={this.props.modal}>
                <img src={this.props.foto} alt="" />
                <Title 
                    titulo={this.props.nome} 
                    subtitulo={this.props.cidade === undefined ? "Geral" : this.props.cidade}
                />
            </div>
        );
    }
}