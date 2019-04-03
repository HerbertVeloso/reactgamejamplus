import React from 'react';

import Title from '../helpers/Title';

export default class EditionGame extends React.Component {
    render(){
        const style = {
            background: "url(" +  this.props.fundo  + ") center no-repeat ",
            backgroundSize: "cover",
        };
        return(
            <div className="editionGame" style={style}>
                <div className="editionGame__box">
                    <Title titulo={this.props.titulo} subtitulo={this.props.subtitulo} />
                </div>
            </div>
        );
    }
}