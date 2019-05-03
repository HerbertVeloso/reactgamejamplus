import React from 'react';
import Slider from "react-slick";

// Helpers
import Title from '../helpers/Title';

// Components
import Depoimento from '../components/Depoimento';
import Noticia from '../components/Noticia';

// Noticias
import unityN from '../assets/images/noticias/unity.png';
import uol from '../assets/images/noticias/uol.png';
import terra from '../assets/images/noticias/terra.png';
import sebraeN from '../assets/images/noticias/sebrae.png';
import negociosEmFoco from '../assets/images/noticias/negociosEmFoco.png';
import segs from '../assets/images/noticias/segs.png';
import governo from '../assets/images/noticias/governo.png';

// Parceiros
import unicef from '../assets/images/parceiros/unicef.png';
import nuuvem from '../assets/images/parceiros/nuuvem.png';
import lumberyard from '../assets/images/parceiros/lumberyard.png';
import sebraeP from '../assets/images/parceiros/sebrae.png';
import tfg from '../assets/images/parceiros/tfg.png';
import unityP from '../assets/images/parceiros/unity.png';
import weDoLogos from '../assets/images/parceiros/weDoLogos.png';
import abraGames from '../assets/images/parceiros/abraGames.png';
import firjan from '../assets/images/parceiros/firjan.png';
import bndes from '../assets/images/parceiros/bndes.png';
import rioCriativo from '../assets/images/parceiros/rioCriativo.png';
import stone from '../assets/images/parceiros/stone.png';
import senac from '../assets/images/parceiros/senac.png';
import minc from '../assets/images/parceiros/minc.png';
import projecao from '../assets/images/parceiros/projecao.png';
import positivo from '../assets/images/parceiros/positivo.png';
import pucSp from '../assets/images/parceiros/pucSp.png';
import brde from '../assets/images/parceiros/brde.png';
import fundoNacional from '../assets/images/parceiros/fundoNacional.png';

export default class Empresa extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pt: {
                titulos: {
                    depoimentos: "Depoimentos",
                    parceiros: "Parceiros que confiam no nosso trabalho",
                    imprensa: "Imprensa"
                },
                depoimentos: [
                    {
                        nome: "Sandro Manfredini",
                        empresa: "Presidente da Abragames",
                        texto: "Sugiro que vocês apoiem demais esse projeto, ele é parte do embrião do desenvolvimento nacional."
                    }, {
                        nome: "Arthur Protásio",
                        empresa: "Flabeware",
                        texto: "A Game Jam Plus é um movimento incrível no Brasil, porque é na verdade a oportunidade que tanta gente procura para se envolver com o mercado de jogos."
                    }, {
                        nome: "Marcos Castro",
                        empresa: "YouTuber",
                        texto: "Nós temos pessoas muito talentosas, criativas e a gente tem sim que fomentar isso tudo que está acontecendo nessa cena, que ainda está começando, mas é muito promissora."
                    }, {
                        nome: "Sérgio Sá Leitão",
                        empresa: "Secretário da Cultura do Estado de São Paulo",
                        texto: "Se mais pessoas abraçarem essa causa, ela pode chegar em um país inteiro, então junte-se a nós!"
                    }
                ],
                noticias: [
                    {
                        link: "https://unity3d.com/pt/events/game-jam-plus-regional-2018",
                        logo: unityN,
                        manchete: "Game Jam Plus Regional 2018",
                        texto: "Junte-se a Alexandre Kikuchi, evangelista da Unity, neste evento especial na Game Jam Plus patrocinado por Unity! Ele estará abrindo a cerimônia como o orador principal e falará sobre a Unity Asset Store, Certificações, Unity Connect e uma introdução às novas ferramentas da Unity 2018.",
                        data: ""
                    }, {
                        link: "http://gamereporter.uol.com.br/game-jam/",
                        logo: uol,
                        manchete: "Já estão abertas as inscrições para a segunda edição da Game Jam +, o maior evento de desenvolvimento da América Latina",
                        texto: "Após passar por seis capitais e realizar uma final emocionante no Rock in Rio 2017, chegou a vez de começar a segunda edição do Game Jam+, o maior evento de desenvolvimento de jogos do Brasil.",
                        data: "22 de jun 2018"
                    }, {
                        link: "https://www.terra.com.br/noticias/dino/gamejamplus-olimpiada-brasileira-de-desenvolvimento-de-jogos,5f9b1a1f47ae4252a038bfa2998ce405psifmprj.html",
                        logo: terra,
                        manchete: "GameJamPlus - Olimpíada Brasileira de desenvolvimento de jogos",
                        texto: "Após primeira edição em 6 capitais e com final no Rock in Rio, estão abertas as inscrições para segunda edição do maior evento de desenvolvimento de jogos da AL.",
                        data: "20 de jul 2018"
                    }, {
                        link: "http://www.ma.agenciasebrae.com.br/sites/asn/uf/MA/sao-luis-recebe-game-jam-neste-final-de-semana,4237046caf1d4610VgnVCM1000004c00210aRCRD",
                        logo: sebraeN,
                        manchete: "São Luís recebe Game Jam+ neste final de semana",
                        texto: "O Sebrae no Maranhão está apoiando a competição voltada para desenvolvedores de games por meio de seu projeto de economia criativa.",
                        data: "26 de jul 2018"
                    }, {
                        link: "http://cultura.gov.br/uma-brincadeira-que-gera-negocios/",
                        logo: governo,
                        manchete: "Uma brincadeira que gera negócios",
                        texto: "Final de olimpíada de desenvolvimento de jogos reúne, em novembro, no RJ, 28 equipes de 14 estados. Objetivo é que games virem negócio.",
                        data: "24 out 2018"
                    }, {
                        link: "https://www.segs.com.br/eventos/142503-final-da-olimpiada-brasileira-de-games-sera-neste-sabado-03-11-na-casa-firjan",
                        logo: segs,
                        manchete: "Final da olimpíada brasileira de games será neste sábado (03/11) na Casa Firjan",
                        texto: "Casa Firjan, espaço de inovação recém-inaugurado em Botafogo, no Rio de Janeiro, recebe neste sábado (3/11) a final da Game Jam+, olimpíada brasileira de desenvolvimento de jogos.",
                        data: "5 de nov 2018"
                    }
                ]
            },
            en: {
                titulos: {
                    depoimentos: "Testimonies",
                    parceiros: "Partners",
                    imprensa: "Press"
                },
                depoimentos: [
                    {
                        nome: "Sandro Manfredini",
                        empresa: "Abragames’ President",
                        texto: "I' would highly suggest that you support this project, it is an essential part of the beginning of the country's game development."
                    }, {
                        nome: "Arthur Protásio",
                        empresa: "Flabeware",
                        texto: "Game Jam+ is an incredible movement in Brazil, it actually is the opportunity that so many are looking for to get involved with the game industry."
                    }, {
                        nome: "Marcos Castro",
                        empresa: "YouTuber",
                        texto: "We have very talented, creative people and we do need to foster all of this that is happening in this ecosystem, that it still growing but is highly promising."
                    }, {
                        nome: "Sérgio Sá Leitão",
                        empresa: "São Paulo State's Culture Secretary",
                        texto: "If more people embrace this cause, it can reach a whole country, so join us!"
                    }
                ],
                noticias: [
                    {
                        link: "https://unity3d.com/pt/events/game-jam-plus-regional-2018",
                        logo: unityN,
                        manchete: "Game Jam Plus Regionals 2018",
                        texto: "Join Alexandre Kikuchi, Unity’s evangelist, in this special event in Game Jam+ sponsored by Unity! He will open the ceremony as the main speaker and will talk about Unity Asset Store, Certifications, Unity Connect and an introduction to Unity 2018 new tools.",
                        data: ""
                    }, {
                        link: "http://gamereporter.uol.com.br/game-jam/",
                        logo: uol,
                        manchete: "Registration is open for the second edition of Game Jam+, the biggest game development event of Latin America",
                        texto: "After being present in six capitals and holding an exciting final in Rock in Rio 2017, it is time to begin the second edition of Game Jam+, the biggest game development event in Brazil.",
                        data: "June 22nd, 2018"
                    }, {
                        link: "https://www.terra.com.br/noticias/dino/gamejamplus-olimpiada-brasileira-de-desenvolvimento-de-jogos,5f9b1a1f47ae4252a038bfa2998ce405psifmprj.html",
                        logo: terra,
                        manchete: "GameJamPlus - Brazilian Game Development Olympics",
                        texto: "After its first edition in 6 capitals and a grand finale in Rock in Rio, the registration for the second edition of the biggest game development event of Latam is now open.",
                        data: "July 20th, 2018"
                    }, {
                        link: "http://www.ma.agenciasebrae.com.br/sites/asn/uf/MA/sao-luis-recebe-game-jam-neste-final-de-semana,4237046caf1d4610VgnVCM1000004c00210aRCRD",
                        logo: sebraeN,
                        manchete: "São Luís to host Game Jam+ site this weekend",
                        texto: "Maranhão’s Sebrae is supporting a competition aimed for game developers through its creative economy project.",
                        data: "July 26th, 2018"
                    }, {
                        link: "http://cultura.gov.br/uma-brincadeira-que-gera-negocios/",
                        logo: governo,
                        manchete: "A game that generates business",
                        texto: "Final of Games Development Olympics gathers, in November, in Rio de Janeiro, 28 teams from 14 states. The goal is that the games developed become business projects.",
                        data: "October 24th, 2018"
                    }, {
                        link: "https://www.segs.com.br/eventos/142503-final-da-olimpiada-brasileira-de-games-sera-neste-sabado-03-11-na-casa-firjan",
                        logo: segs,
                        manchete: "Brazilian game development Olympics final to happen this saturday (03/11) at Casa Firjan",
                        texto: "Casa Firjan, newly opened innovation space in Botafogo, Rio de Janeiro, hosts this saturday (3/11) Game Jam+ final, the Brazilian game development Olympics.",
                        data: "November 5th, 2018"
                    }
                ]
            },
            parceiros: [ unicef, nuuvem, lumberyard, sebraeP, tfg, unityP, weDoLogos, abraGames, firjan, bndes, rioCriativo, stone, senac, projecao, positivo, pucSp, brde, minc, fundoNacional ]
        };
    }

    language(){
        const controle = localStorage.getItem('lingua');
        const lang = navigator.language;

        if(controle === undefined){
            if(lang === 'pt-BR' || lang === 'pt'){
                return this.state.pt;
            } else {
                return this.state.en;        
            }
        } else {
            if(controle === 'pt'){
                return this.state.pt;
            } else {
                return this.state.en;        
            }
        }
    }

    render(){
        const settings = {
            dots: true,
            arrows: false,
            // infinite: true,
            // className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
              {
                breakpoint: 1240,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 836,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        // const settings = {
        //     // dots: false,
        //     // infinite: true,
        //     // speed: 500,
        //     // slidesToShow: teste,
        //     // slidesToScroll: 1,
        //     adaptiveHeight: true,
        //     autoplay: true,
        //     autoplaySpeed: 6000,
        //     centerMode: true,
        //     className: "depoimentos",
        //     infinite: true,
        //     // slidesPerRow: 2,
        //     // slidesToScroll: 2,
        //     // swipeToSlide: true
        // };
        return(
            <main className="container empresa">
                <section>
                    <Title titulo={this.language().titulos.depoimentos} />
                    <div>
                        <Slider {...settings}>
                            {this.language().depoimentos.map(
                                item => {
                                    return (
                                        <Depoimento 
                                            nome={item.nome}
                                            empresa={item.empresa}
                                            texto={item.texto}
                                        />
                                    );
                                }
                            )}
                        </Slider>
                    </div>
                </section>
                <section>
                    <Title titulo={this.language().titulos.parceiros} />
                    <div className="parceiros">
                        {this.state.parceiros.map(
                            item => {
                                return <img src={item} className="parceiros__logo" alt="Logo parceiro" />
                            }
                        )}
                    </div>
                </section>
                <section>
                    <Title titulo={this.language().titulos.imprensa} />
                    <div className="noticias">
                        {this.language().noticias.map(
                            item => {
                                return (
                                    <Noticia 
                                        logo={item.logo}
                                        manchete={item.manchete}
                                        texto={item.texto}
                                        data={item.data}
                                        link={item.link}
                                    />
                                );
                            }
                        )}
                    </div>
                </section>
            </main>
        );
    };
}