import React from 'react';

export default class Depoimento extends React.Component{
    render() {
        return(
            <div className="testimony">
                <div>
                    <h3>{ this.props.nome }</h3>
                    <p>{ this.props.texto }</p>
                    <h4>{ this.props.empresa }</h4>
                </div>
            </div>
        );
    };
}