import React from 'react';

export default class Noticia extends React.Component{
    render() {
        return(
            <div className="news">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <div>
                        <img src={this.props.logo} alt="" />
                        <h3>{ this.props.manchete }</h3>
                        <p>{ this.props.texto }</p>
                        <h4>{ this.props.data }</h4>
                    </div>
                </a>
            </div>
        );
    };
}