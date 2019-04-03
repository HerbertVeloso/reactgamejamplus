import React from 'react';

import Title from '../helpers/Title';

export default class FAQBox extends React.Component {
    render(){
        const style = {
            background: "url(" +  this.props.fundo  + ") center no-repeat ",
            backgroundSize: "cover",
        };
        return(
            <section className="faqBox"  data-aos="fade-up">
                <div className="container">
                    <Title titulo={this.props.titulo} subtitulo={this.props.subtitulo} />
                </div>
                <div className="faqBox__content" style={style}>
                    <div className="container">
                        <div>
                            <p> { this.props.texto } </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}