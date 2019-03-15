import React from 'react';

import Navbar from '../components/Navbar';
import Etapa from '../components/Etapa';
import Footer from '../components/Footer';

import Title from '../helpers/Title';

import timeline from '../assets/images/timeline.png';
import bgGJ from '../assets/images/bgGJ.png';
import bgVotoPopular from '../assets/images/bgVotoPopular.png';
import bgAceleracao from '../assets/images/bgAceleracao.png';
import bgFinal from '../assets/images/bgFinal.png';

export default class ComoFunciona extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pt: {
        titulo: "A Game Jam +",
        subtitulo: "É dividida em 3 etapas",
        etapa1: {
          titulo: "1ª Etapa",
          subtitulo: "Game Jam",
          texto: "TODAS AS REGIONAIS OCORRERÃO SIMULTANEAMENTE NO MESMO FIM DE SEMANA, QUE NEM A GGJ. FUNCIONANDO COMO UM MODELO MISTO DE GAME JAM SOMADO A BUSINESS, OS PARTICIPANTES IRÃO PROPOR IDÉIAS, FORMARÃO EQUIPES E TERÃO 48H PARA DESENVOLVEREM UM JOGO E O PITCH SOBRE SEU PROJET. AO FINAL DO PROCESSO, APRESENTARÃO SEUS JOGOS PARA UMA BANCA DE JURADOS SIMULANDO UM PITCHING PARA INVESTIDORES OU UMA PUBLISHER, DESTACANDO NÃO SÓ O JOGO, MAS SEU PLANEJAMENTO DE MARKETING E NEGÓCIOS. APÓS ISSO TEREMOS UM VENCEDOR POR CADA REGIONAL."
        },
        voto: {
          titulo: "Votação Popular",
          texto: "JOGOS CRIADOS SERÃO SUBMETIDOS NUMA PLATAFORMA ONLINE E AVALIADOS PELO PÚBLICO. SEGUIDO DA GAME JAM, HAVERÁ UM PERÍODO DE UM MÊS DE VOTAÇÃO POPULAR ONLINE, DO QUAL TODOS AS OUTRAS EQUIPES QUE NÃO FORAM SELECIONADAS PODEM TENTAR SUA CHANCE, E ASSIM SERÁ ELEITO MAIS UMA EQUIPE VENCEDORA POR CIDADE. ESSE É UM MOMENTO DE ESTIMULAÇÃO DA VISÃO DE NEGÓCIOS E MARKETING PARA AS EQUIPES CONQUISTAREM SUA VAGA NA FINAL, AUMENTANDO TAMBÉM O TEMPO DE VIDA DOS PROJETOS FEITOS NA GAME JAM."
        },
        etapa2: {
          titulo: "2ª Etapa",
          subtitulo: "Aceleração das equipes finalistas",
          texto: "ACONTECE NO PERÍODO ENTRE A REGIONAL E A FINAL. FUNCIONANDO COMO UMA ACELERADORA DE STARTUPS, CONEXÕES ENTRE OS FINALISTAS COM PROFISSIONAIS RENOMADOS DA INDÚSTRIA SERÃO EXECUTADAS PELA ORGANIZAÇÃO PRINCIPAL DO EVENTO E VISA AUMENTAR A QUALIDADE DOS JOGOS E TRAZER A NOÇÃO DE NEGÓCIOS PARA TODOS OS PARTICIPANTES."
        },
        etapa3: {
          titulo: "3ª Etapa",
          subtitulo: "A grande final",
          texto: "OCORRE EM NOVEMBRO E REÚNE OS FINALISTAS E ORGANIZADORES DE CADA REGIONAL PARA UMA DISPUTA DECISIVA A SER REALIZADA NO RIO DE JANEIRO. É UM MOMENTO DE NETWORKING E TROCA DE CULTURA ENTRE TODAS AS REGIÕES PARTICIPANTES, CULMINANDO NO EVENTO DE PREMIAÇÃO DOS VENCEDORES. ALÉM DA PREMIAÇÃO PRINCIPAL TAMBÉM SERÃO PREMIADOS:",
          lista: ["Melhor Jogo Social","Melhor Arte","Melhor Som","Melhor Narrativa","Melhor Inovação","Melhor Gameplay","Melhor Design"]
        }
      },
      en: {
        titulo: "Game Jam +",
        subtitulo: "HAPPENS IN 3 STAGES",
        etapa1: {
          titulo: "1st Stage",
          subtitulo: "Game Jam",
          texto: "ALL REGIONAL QUALIFIERS WILL HAPPEN SIMULTANEOUSLY ON THE SAME WEEKEND, PRETTY MUCH LIKE GGJ. IT WORKS LIKE A GAME JAM MEETS BUSINESS, AS PARTICIPANTS WILL NEED TO COME UP WITH THEIR IDEAS, GET TOGETHER IN A TEAM AND WILL HAVE 48H TO DEVELOP NOT ONLY THEIR GAME BUT ALSO A PITCH FOR THEIR PRODUCT. BY THE END OF THE JAM, THEY WILL PRESENT THEIR GAMES TO THE JURIES AS IF PITCHING TO A PUBLISHER OR INVESTOR, SHOWING NOT ONLY THE GAME BUT ALSO THEIR MARKETING AND BUSINESS PLANNING. AFTER THAT WE WILL HAVE THE FIRST WINNER OF EACH CITY."
        },
        voto: {
          titulo: "Popular Voting",
          texto: "GAMES WILL BE SUBMITTED IN AN ONLINE PLATFORM AND THEN EVALUATED BY THE PUBLIC. FOLLOWING THE GAME JAM, THERE WILL BE A MONTH OF ONLINE VOTING, IN WHICH THE ALL OTHER TEAMS NOT PREVIOUSLY SELECTED CAN TRY THEIR WAY TO THE TOP AND BE CHOSEN AS THE SECOND WINNER OF THEIR CITY. THIS IS A MOMENT TO STIMULATE THE TEAMS BUSINESS AND MARKETING VISIONS FOR THEM TO CHALLENGE THEMSELVES AND CONQUER THEIR SPOT IN THE FINAL, WHILE GIVING A BOOST TO THE LIFE CYCLE OF THEIR PROJECTS."
        },
        etapa2: {
          titulo: "2nd Stage",
          subtitulo: "FINALISTS ACCELERATION",
          texto: "IT HAPPENS IN THE PERIOD IN BETWEEN THE GAME JAM AND THE FINALS. IT IS A STAGE THAT FUNCTIONS JUST LIKE A ACCELERATION PROCESS OF STARTUPS: THE MAIN ORGANIZERS WILL LINK THE FINALISTS WITH SEASONED PROFESSIONALS FOR ONLINE MENTORING SESSIONS, LOOKING TO IMPROVE THE OVERALL QUALITY OF THE GAMES AND BETTER THE TEAM'S BUSINESS MINDSETS."
        },
        etapa3: {
          titulo: "3rd Stage",
          subtitulo: "THE FINALS",
          texto: "IT WILL HAPPEN IN NOVEMBER AND UNITE THE FINALISTS AND THE ORGANIZERS OF EACH LOCAL SITES IN THE FINAL SHOWDOWN IN RIO DE JANEIRO. IT'S A MOMENT FILLED WITH NETWORKING AND CULTURAL EXCHANGES BETWEEN ALL THE PARTICIPATING CITIES, BUILDING UP TO THE AWARDS CEREMONY. BESIDES THE MAIN AWARDS, THERE WILL BE ALSO THE FOLLOWING EXTRA AWARDS:",
          lista: ["Best social impact game","Best visuals","Best music","Best narrative","Best innovation","Best gameplay experience","Best Game Design"]
        }
      }
    }
  }

  language(){
    const lang = navigator.language;

    if(lang === 'pt-BR' || lang === 'pt'){
      return this.state.pt;
    } else {
      return this.state.en;        
    }
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <section className="container comoFunciona">
            <Title titulo={this.language().titulo} subtitulo={this.language().subtitulo} />
            <div class="timeline">
                <img src={timeline} alt="Timeline de todas as etapas da Game Jam +" />
                <a href="#firstStage" class="linkFirst"></a>
                <a href="#voteStage" class="linkVote"></a>
                <a href="#secondStage" class="linkSecond"></a>
                <a href="#finalStage" class="linkFinals"></a>
            </div>
          </section>
          <Etapa 
            id="firstStage"
            fundo={ bgGJ }
            titulo={this.language().etapa1.titulo}
            subtitulo={this.language().etapa1.subtitulo}
            texto={this.language().etapa1.texto}
          />
          <Etapa 
            id="voteStage"
            fundo={ bgVotoPopular }
            titulo={this.language().voto.titulo}
            texto={this.language().voto.texto}
          />
          <Etapa 
            id="secondStage"
            fundo={ bgAceleracao }
            titulo={this.language().etapa2.titulo}
            subtitulo={this.language().etapa2.subtitulo}
            texto={this.language().etapa2.texto}
          />
          <Etapa 
            id="finalStage"
            fundo={ bgFinal }
            titulo={this.language().etapa3.titulo}
            subtitulo={this.language().etapa3.subtitulo}
            texto={this.language().etapa3.texto}
            lista={this.language().etapa3.lista}
          />
        </main>
        <Footer />
      </div>
    );
  }
}