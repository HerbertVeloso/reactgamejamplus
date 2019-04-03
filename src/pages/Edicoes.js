import React from 'react';
// import Galeria from 'react-grid-gallery';

import Title from '../helpers/Title';

import Gallery from "../components/Gallery";
import EditionGame from '../components/EditionGame';

import map18 from "../assets/images/edicoes/2018/mapa.png"
import map17 from "../assets/images/edicoes/2017/mapa.png"


// PrÊmios de 2018
import agathasEscape from '../assets/images/edicoes/2018/agathasEscape.gif';
import fungi from '../assets/images/edicoes/2018/fungi.jpg';
import oneDollar from '../assets/images/edicoes/2018/oneDollar.jpg';
import sailorSaviors from '../assets/images/edicoes/2018/sailorSaviors.jpg';
import ghostein from '../assets/images/edicoes/2018/ghostein.jpg';
import cuteArmy from '../assets/images/edicoes/2018/cuteArmy.jpg';

// Fotos de 2018
import f01 from '../assets/images/edicoes/2018/01.jpg';
import f02 from '../assets/images/edicoes/2018/02.jpg';
import f03 from '../assets/images/edicoes/2018/03.jpg';
import f04 from '../assets/images/edicoes/2018/04.jpg';
import f05 from '../assets/images/edicoes/2018/05.jpg';
import f06 from '../assets/images/edicoes/2018/06.jpg';
import f07 from '../assets/images/edicoes/2018/07.png';
import f08 from '../assets/images/edicoes/2018/08.png';
import f09 from '../assets/images/edicoes/2018/09.png';
import f10 from '../assets/images/edicoes/2018/10.jpg';
import f11 from '../assets/images/edicoes/2018/11.jpg';
import f12 from '../assets/images/edicoes/2018/12.jpg';
import f13 from '../assets/images/edicoes/2018/13.jpg';
import f14 from '../assets/images/edicoes/2018/14.jpg';

// Premios 2017
import sowrdOfYohn from "../assets/images/edicoes/2017/SwordOfYohn.jpg";
import ovelhas from "../assets/images/edicoes/2017/ovelhas.jpg";
import redScarf from "../assets/images/edicoes/2017/redScarf.jpg";

// Fotos de 2017
import a01 from '../assets/images/edicoes/2017/01.jpg';
import a02 from '../assets/images/edicoes/2017/02.jpg';
import a03 from '../assets/images/edicoes/2017/03.jpg';
import a04 from '../assets/images/edicoes/2017/04.jpg';
import a05 from '../assets/images/edicoes/2017/05.jpg';
import a06 from '../assets/images/edicoes/2017/06.jpg';
import a07 from '../assets/images/edicoes/2017/07.jpg';
import a08 from '../assets/images/edicoes/2017/08.jpg';
import a09 from '../assets/images/edicoes/2017/09.jpg';
import a10 from '../assets/images/edicoes/2017/10.jpg';
import a11 from '../assets/images/edicoes/2017/11.jpg';
import a12 from '../assets/images/edicoes/2017/12.jpg';
import a13 from '../assets/images/edicoes/2017/13.jpg';
import a14 from '../assets/images/edicoes/2017/14.jpg';



export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ultimo: {
                edicao: "na edição de 2018",
                ano: "2018",
                fotos: [
                    {
                        src: f01,
                        thumbnail: f01,
                        thumbnailHeight: 100
                    }, {
                        src: f02,
                        thumbnail: f02,
                        thumbnailHeight: 100
                    }, {
                        src: f03,
                        thumbnail: f03,
                        thumbnailHeight: 100
                    }, {
                        src: f04,
                        thumbnail: f04,
                        thumbnailHeight: 100
                    }, {
                        src: f05,
                        thumbnail: f05,
                        thumbnailHeight: 100
                    }, {
                        src: f06,
                        thumbnail: f06,
                        thumbnailHeight: 100
                    }
                    // }, {
                    //     src: f07,
                    //     thumbnail: f07,
                    //     thumbnailHeight: 100
                    // }, {
                    //     src: f08,
                    //     thumbnail: f08,
                    //     thumbnailHeight: 100
                    // }, {
                    //     src: f09,
                    //     thumbnail: f09,
                    //     thumbnailHeight: 100
                    // }, {
                    //     src: f10,
                    //     thumbnail: f10,
                    //     thumbnailHeight: 100
                    // }, {
                    //     src: f11,
                    //     thumbnail: f11,
                    //     thumbnailHeight: 100
                    // }, {
                    //     src: f12,
                    //     thumbnail: f12,
                    //     thumbnailHeight: 100
                    // }, {
                    //     src: f13,
                    //     thumbnail: f13,
                    //     thumbnailHeight: 100
                    // }, {
                    //     src: f14,
                    //     thumbnail: f14,
                    //     thumbnailHeight: 100
                    // }
                ],
                premios: [
                    {
                        nome: "Agatha's escape",
                        categoria: "",
                        fundo: agathasEscape
                    }, {
                        nome: "Fungi",
                        categoria: "",
                        fundo: fungi
                    }, {
                        nome: "One Dollar",
                        categoria: "",
                        fundo: oneDollar
                    }, {
                        nome: "Sailor Saviors",
                        categoria: "",
                        fundo: sailorSaviors
                    }, {
                        nome: "Ghostein",
                        categoria: "",
                        fundo: ghostein
                    }, {
                        nome: "Cute Army",
                        categoria: "",
                        fundo: cuteArmy
                    }
                ],
                mapa: map18
            },
            anterior: {
                edicao: "na edição de 2017",
                ano: "2017",
                fotos: [
                    {
                        src: a01,
                        thumbnail: a01
                    }, {
                        src: a02,
                        thumbnail: a02
                    }, {
                        src: a03,
                        thumbnail: a03
                    }, {
                        src: a04,
                        thumbnail: a04
                    }, {
                        src: a05,
                        thumbnail: a05
                    }, {
                        src: a06,
                        thumbnail: a06
                    }
                    // }, {
                    //     src: a07,
                    //     thumbnail: a07
                    // }, {
                    //     src: a08,
                    //     thumbnail: a08
                    // }, {
                    //     src: a09,
                    //     thumbnail: a09
                    // }, {
                    //     src: a10,
                    //     thumbnail: a10
                    // }, {
                    //     src: a11,
                    //     thumbnail: a11
                    // }, {
                    //     src: a12,
                    //     thumbnail: a12
                    // }, {
                    //     src: a13,
                    //     thumbnail: a13
                    // }, {
                    //     src: a14,
                    //     thumbnail: a14
                    // }
                ],
                premios: [
                    {
                        nome: "Sword of Yohh",
                        categoria: "Escolha dos jurados",
                        fundo: sowrdOfYohn
                    }, {
                        nome: "As Ovelhas Contra-Atacam",
                        categoria: "Voto popular",
                        fundo: ovelhas
                    }, {
                        nome: "Red Scarf",
                        categoria: "Prêmio Gamer Trials",
                        fundo: redScarf
                    }
                ],
                mapa: map17
            }
        }
    }

    getYear(){
        const url = window.location.search.replace("?", "");
        
        if (url === "2018") {
            return this.state.ultimo
        } else if (url === "2017") {
            return this.state.anterior
        } else {
            return this.state.ultimo
        }
    }

    render(){
        const evento = this.getYear();
        return(
            <main className="edicoes">
               <section className="container">
                    <Title 
                        titulo="O que aconteceu" 
                        subtitulo={evento.edicao}
                    />
                    <Gallery fotos={evento.fotos} />
                </section>
                <section className="container">
                   <Title titulo="Ganhadores" subtitulo={evento.ano} />
                   <div>
                        {evento.premios.map(
                            item => {
                                return  (
                                    <EditionGame
                                        titulo={item.nome}
                                        subtitulo={item.categoria}
                                        fundo={item.fundo}
                                    />
                                );
                            }
                        )}
                   </div>
               </section>
                <section className="container">
                    <Title
                        titulo="Cidades"
                        subtitulo="participantes"
                    />
                    <img className="map" src={evento.mapa} alt="Mapa das cidades participantes" />
                </section>
            </main>
        );
    }
}