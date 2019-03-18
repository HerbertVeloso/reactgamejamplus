import React from 'react';

import Title from '../helpers/Title';

import Navbar from '../components/Navbar';
import Gallery from "../components/Gallery";

import map from "../assets/images/mapa.png"

import unity from "../assets/images/categorias/unityLogo.png";
import unicef from "../assets/images/categorias/unicefLogo.png";
import nuuvem from "../assets/images/categorias/nuuvemLogo.png";
import tfg from "../assets/images/categorias/tfgLogo.png";
import lumberYard from "../assets/images/categorias/lumberYardLogo.png";



export default class Card extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <main>
                    <section className="container">
                        <Title 
                            titulo="Edição 2018" 
                            subtitulo="Game Jam +"
                        />
                        <Gallery backdropClosesModal={true}/>
                    </section>
                    <section className="container">
                        <img src={map} alt="Mapa das cidades participantes" />
                    </section>
                    <section className="container">
                        <Title 
                            titulo="Categoria e ganhadores" 
                            subtitulo="Game Jam +" 
                        />
                        <div>
                            <Title
                                titulo="Best Game"
                                subtitulo={`"Judge's choice"`}
                            />
                            <img src={unity} />
                        </div>
                        <div>
                            <Title
                                titulo={`Best "social impact" game`}
                                subtitulo="Unicef"
                                inverse
                            />
                            <img src={unicef} />
                        </div>
                        <div>
                            <Title
                                titulo="Best pc game"
                                subtitulo="Nuuvem"
                            />
                            <img src={nuuvem} />
                        </div>
                        <div>
                            <Title
                                titulo="Best mobile game"
                                subtitulo="Tfg"
                                inverse
                            />
                            <img src={tfg} />
                        </div>
                        <div>
                            <Title
                                titulo="Best game"
                                subtitulo={`“People choice award`}
                            />
                            <img src={lumberYard} />
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <Title
                                titulo="Impacto social"
                                subtitulo="Game Jam +"
                            />
                        </div>
                        <div>
                            <div className="container">
                            <Title
                                titulo="Impacto social"
                            />
                            <p>
                                A OLIMPÍADA DE DESENVOLVIMENTO DE JOGOS, GAME JAM+ UNIU FORÇAS COM O UNICEF (FUNDO DAS NAÇÕES UNIDAS PARA A INFÂNCIA) E A WEWORKLABS PARA AVALIAR E TESTAR A EFETIVIDADE DOS "JOGOS DE IMPACTO". A GJ+ ANUNCIA A ABERTURA DA CATEGORIA DIVERSIFIER, NA QUAL OS JOGOS DE IMPACTO SOCIAL SERÃO TAMBÉM AVALIADOS POR UMA BANCA DE JURADOS DO UNICEF E O JOGO VENCEDOR PODERÁ SER IMPLEMENTADO PELA ORGANIZAÇÃO. 
                            </p>
                            </div>
                        </div>
                        <div style={{background: '#444'}}>
                            <div className="container">
                            <Title
                                titulo="Impacto social"
                            />
                            <p>
                                1. AO PARTICIPAR DA CATEGORIA JOGOS DE IMPACTO SOCIAL, ESTOU EXCLUÍDO DO VOTO DOS JURADOS E VOTO POPULAR? NÃO, ESSA É UMA CATEGORIA À PARTE, COM UMA PREMIAÇÃO A PARTE. VOCÊ PODE TANTO SER CAMPEÃO POR VOTO POPULAR/JURADO NA SUA CIDADE E SER UMA DAS 3 EQUIPES ESCOLHIDAS NO BRASIL, COMO NÃO SER UMA DAS DUAS VENCEDORAS E AINDA ASSIM TER O SEU JOGO ESCOLHIDO PELA BANCA DO UNICEF. 
                            </p>
                            <p>
                                2. MAS O QUE EXATAMENTE O UNICEF PROCURA? O PRINCIPAL FOCO DO UNICEF COM ESSA PROPOSTA É AUMENTAR AS DOAÇÕES ATRAVÉS DA GAMIFICAÇÃO. HOJE ELA ENXERGA DOIS PROCESSOS COM ESSE POTENCIAL: 
                            </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}