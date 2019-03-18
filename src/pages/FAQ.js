import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import FAQBox from '../helpers/FAQBox';

// Imagens
import ImgInscrever from '../assets/images/bgInscrever.jpg';
import ImgQuemPode from '../assets/images/bgQuemPode.jpg';
import ImgEquipe from '../assets/images/bgEquipe.jpg';
import ImgLocal from '../assets/images/bgLocal.jpg';
import ImgRemoto from '../assets/images/bgRemoto.jpg';
import ImgNaoDesenvolvedor from '../assets/images/bgNaoDesenvolvedor.jpg';
import ImgLevarJogo from '../assets/images/bgLevarJogo.jpg';
import ImgMostrarEvento from '../assets/images/bgMostrarEvento.jpg';
import ImgQuemVence from '../assets/images/bgQuemVence.jpg';

export default class FAQ extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          pt: {
            box1: {
                titulo: "Como faço",
                subtitulo: "para me inscrever?",
                texto: "CADA REGIONAL TERÁ SEU MODELO DE INSCRIÇÃO. TODAS ESTARÃO INDICADAS NO SITE PRINCIPAL DO EVENTO (WWW.GAMEJAMPLUS.COM). ENCONTRE SUA REGIONAL E FALE COM OS PRODUTORES."
            },
            box2: {
                titulo: "Quem pode",
                subtitulo: "participar?",
                texto: "A GAME JAM + ESTÁ DE BRAÇOS ABERTOS PARA A PARTICIPAÇÃO DE PESSOAS DE DIFERENTES ÁREAS, NA VERDADE, ISSO AGREGA MUITO À EQUIPE. NÃO É NECESSÁRIO TER EXPERIÊNCIA EXTENSIVA EM CRIAR JOGOS, NÃO É UM EVENTO FECHADO A VETERANOS. DESDE QUE VOCÊ CONSIGA CONTRIBUIR PARA A CRIAÇÃO DO JOGO, É BEM-VINDO! LEMBRE-SE QUE TEREMOS MENTORES PARA JUSTAMENTE AJUDAR VOCÊS! ENTÃO NÃO SE ACANHE! ACEITE O DESAFIO E PARTICIPE DA MAIOR INICIATIVA DE GAME JAM VOLTADA A NEGÓCIOS DA AMÉRICA LATINA."
            },
            box3: {
                titulo: "Eu posso já ter",
                subtitulo: "uma equipe formada?",
                texto: "ENTÃO, A INTENÇÃO DO EVENTO É FORMAR EQUIPES NO PRÓPRIO LOCAL. ORGANIZAREMOS UMA DINÂMICA EM CADA REGIONAL PARA OS PARTICIPANTES SE CONHECEREM, FORMAREM IDEIAS E EQUIPES. ACHAMOS QUE ASSIM O EVENTO FICA MUITO MAIS DIVERTIDO, AFINAL, VAI QUE VOCÊ ENCONTRA O SEU DREAM TEAM ALI? MAS CASO ESSA PERSPECTIVA NÃO TE ANIME, VOCÊ PODE SIM IR COM EQUIPE FORMADA."
            },
            box4: {
                titulo: "Preciso ficar no local do evento o tempo inteiro?",
                subtitulo: "OU MINHA EQUIPE PODE IR SÓ NA ABERTURA, TRABALHAR DE CASA, E VOLTAR PARA O ENCERRAMENTO?",
                texto: "SIM, PRECISA! ESTE MODELO DE JAM FUNCIONA COM A PRODUÇÃO 100% PRESENCIAL. CLARO, NINGUÉM VAI FICAR TRANCADO NUMA GAIOLA PARA TRABALHAR, VOCÊ TEM O SEU DIREITO DE IR E VIR DO LOCAL, MAS A PRODUÇÃO DO JOGO TEM QUE SER FEITA NO LOCAL. ENTÃO SE VOCÊ QUISER SAIR PARA COMER, PEGAR ALGUMA COISA, DORMIR EM CASA, SAIBA QUE ENQUANTO ESTÁ FAZENDO ISSO, VOCÊ NÃO PODE IR ADIANTANDO O SEU PROJETO."
            },
            box5: {
                titulo: "Parte da equipe pode trabalhar remotamente?",
                subtitulo: "TENHO UM AMIGO NA CIDADE NATAL DA TIA DA AMIGA DA MINHA AVÓ QUE QUERIA PARTICIPAR.",
                texto: "INFELIZMENTE, NÃO, NÃO PODE. COMO DITO ACIMA A PRODUÇÃO É 100% PRESENCIAL, ENTÃO A EQUIPE TODA PRECISA ESTAR NO LOCAL DO EVENTO."
            },
            box6: {
                titulo: "Não sou desenvolvedor mas queria participar",
                subtitulo: "AJUDANDO EM OUTRAS ÁREAS DO PROJETO, PODE?",
                texto: "A GAME JAM + ESTÁ DE BRAÇOS ABERTOS PARA A PARTICIPAÇÃO DE PESSOAS DE DIFERENTES ÁREAS, NA VERDADE, ISSO AGREGA MUITO À EQUIPE. COMO SERÁ NECESSÁRIO PENSAR NO MARKETING, VISÃO DE NEGÓCIOS DO JOGO E FAZER PITCH DE APRESENTAÇÃO, TER PESSOAS HABILIDOSAS NESSAS ÁREAS É UMA VANTAGEM ESTRATÉGICA. TEM AQUELE(A) AMIGO(A) DE PUBLICIDADE, ADMINISTRAÇÃO OU ÁREAS RELACIONADAS QUE MANDARIA BEM NISSO? CHAME ELE(A) QUE A EQUIPE DESSA PESSOA VAI TER UM POWER-UP INCRÍVEL."
            },
            box7: {
                titulo: "Eu estou trabalhando num jogo há um tempo,",
                subtitulo: "POSSO LEVAR ELE PARA SER FEITO NA GJ+?",
                texto: "SE VOCÊ JÁ TRABALHOU NO JOGO ANTERIORMENTE, NÃO PODE. AFINAL, TODA A PRODUÇÃO TEM QUE SER INICIADA NA JAM. SE VOCÊ SIMPLESMENTE SÓ TEM A IDEIA DO JOGO, GUARDE ELA NA CABEÇA PARA APRESENTAR NO PITCH INICIAL. SE AINDA ASSIM ESTIVER EM DÚVIDAS, OLHE NA SEÇÃO DE REGRAS A QUE ESTÁ EM VERMELHO."
            },
            box8: {
                titulo: "Posso filmar, tirar foto, fazer live,",
                subtitulo: "MOSTRAR O EVENTO NA REDE SOCIAL?",
                texto: "CLARO QUE PODE! AQUI NÃO É CINEMA, RELAXE! SÓ PEDIMOS QUE RESPEITE A PRIVACIDADE DE SEUS COLEGAS QUANDO O FIZER. AFINAL, COMO A PRIMEIRA REGRA DISSE: RESPEITE!"
            },
            box9: {
                titulo: "Como vocês decidem quem vence?",
                texto: "TEREMOS DUAS EQUIPES VENCEDORAS POR REGIONAL: UMA ATRAVÉS DA AVALIAÇÃO DA BANCA DE JURADOS, E OUTRA SALVA POR VOTO POPULAR. MAIORES INFORMAÇÕES NAS SEÇÕES ESPECÍFICAS."
            }
          },
          en: {
            box1: {
                titulo: "How can I",
                subtitulo: "PARTICIPATE?",
                texto: "EVERY JAM SITE HAS ITS TYPE OF REGISTRATION. EVERY ONE OF THEM WILL BE LISTED ON OUR MAIN SITE (WWW.GAMEJAMPLUS.COM). FOR ANY FURTHER DOUBTS, CONTACT YOUR LOCAL ORGANIZER."
            },
            box2: {
                titulo: "Who can",
                subtitulo: "PARTICIPATE?",
                texto: "GAME JAM + WELCOMES JAMMERS FROM ANY AREAS OF EXPERTISES, THAT ACTUALLY IMPROVES A TEAM PROJECT. REMEMBER THAT MAKING GAMES IS A MULTIDISCIPLINARY ACTIVITY. THERE ARE NO PAST EXPERIENCE REQUIREMENTS, YOU DON’T HAVE TO BE A PRO OR A VETERAN, AS LONG AS YOU CAN CONTRIBUTE IN SOME WAY TO THE PROJECT, YOU’RE WELCOME! AFTER ALL, THAT’S WHY WE HAVE MENTORS! SO DON’T BE AFRAID, GO DOWN THE RABBIT HOLE AND EMBARK ON THIS ADVENTURE!"
            },
            box3: {
                titulo: "Can I participate with",
                subtitulo: "A TEAM I CREATED BEFOREHAND?",
                texto: "YES, YOU CAN! OF COURSE, IT IS NOT A REQUIREMENT. WE WILL HOST AN ACTIVITY TO BREAK THE ICE AND BUILD TEAMS, SO NO ONE WILL BE LEFT OUT. REMEMBER TO BE OPEN TO THIS EXPERIENCE! YOU CAN FIND YOUR DREAM TEAM MEMBER THERE, WHO KNOWS?"
            },
            box4: {
                titulo: "Do I must stay at the jam site during production?",
                subtitulo: "CAN MY TEAM ONLY PARTICIPATE IN THE OPENING CEREMONY AND COME BACK AT THE END?",
                texto: "YES, YOU MUST STAY. THIS JAM IS 100% TO BE HOSTED ON SITE. OF COURSE, WE’RE NOT LOCKING ANYONE ANYWHERE. YOU CAN GO OUT WHENEVER YOU WANT, BUT JUST REMEMBER TO COME BACK TO WORK ON YOUR PROJECT. THE GAME PROJECT MUST BE WORKED ONLY INSIDE YOUR JAM SITE. SO IF YOU WANT TO GO OUT TO EAT, SLEEP AT HOME, ATTEND YOUR COUSIN BAR-MITZVAH, PLEASE DO. BUT YOU WON’T BE PERMITTED TO WORK ON YOUR PROJECT WHILE OUTSIDE."
            },
            box5: {
                titulo: "Can one of my team members work remotely?",
                subtitulo: "I HAVE A FRIEND THAT LIVES IN MY GRANDMA’S CITY THAT WANTED TO PARTICIPATE.",
                texto: "UNFORTUNATELY, NO THEY CAN’T. I MEAN, THEY CAN REGISTER AND GO TO YOUR JAM SITE TO PARTICIPATE THERE. BUT NO ONE ON THE TEAM CAN WORK ON THE PROJECT REMOTELY."
            },
            box6: {
                titulo: "I’m not a developer but I wanted to help",
                subtitulo: "A TEAM IN SOME OTHER WAY, CAN I?",
                texto: "YES, YUP AND OF COURSE YOU CAN! AS SAID BEFORE, MAKING GAMES IS A MULTIDISCIPLINARY ACTIVITY, AND GJ+ IS AN EVENT THAT RECOGNIZES THAT. REMEMBER THAT THERE WILL BE A BUSINESS PITCH, SO PEOPLE WITH MARKETING, BUSINESS, ADVERTISING AND MONETIZATION KNOWLEDGE CAN PARTICIPATE (AND OTHER SPECIALIZATIONS TOO!). DO YOU HAVE A FRIEND THAT IS AWESOME DOING BUSINESS PITCHES? WHY NOT ASKING HIM TO JOIN YOUR TEAM? MAKING GAMES FOR A LIVING IS NOT RESTRICTED TO ONLY MAKING THE GAME, REMEMBER THAT AT ALL TIMES!"
            },
            box7: {
                titulo: "I’m working in a game for a while,",
                subtitulo: "CAN I USE IT IN GJ+?",
                texto: "WELL, NO. WE SAID BEFORE, THE GAME MUST BE MADE ENTIRELY DURING THE JAM. IF YOU WORKED ON IT BEFORE, IT CAN’T BE YOUR GAME PROJECT THIS TIME.IF YOU HAVE ANY DOUBTS, PLEASE GO BACK TO THE RULES SECTION, TO THE ONE WE WROTE IN RED."
            },
            box8: {
                titulo: "Can I film, photograph, stream the jam?",
                subtitulo: "MY ONLINE FOLLOWERS WOULD LOVE TO SEE THIS!",
                texto: "OF COURSE YOU CAN! THIS IS NOT A MOVIE THEATER, GO NUTS! WE ONLY ASK YOU TO RESPECT YOUR FELLOW JAMMERS PRIVACY IN DOING SO, AFTER ALL, AS THE FIRST RULE SAID: RESPECT!"
            },
            box9: {
                titulo: "How do you decide the winners?",
                texto: "WE’LL HAVE TWO WINNING TEAMS IN EACH JAM SITE: ONE DECIDED BY THE JURORS AND THE OTHER BY ONLINE PUBLIC VOTING. FURTHER INFORMATIONS ON THE SECTION NUMBER 6."
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

    render(){
        return(
            <main>
                <FAQBox 
                    titulo={this.language().box1.titulo}
                    subtitulo={this.language().box1.subtitulo}
                    texto={this.language().box1.texto}
                    fundo={ImgInscrever}
                />
                <FAQBox 
                    titulo={this.language().box2.titulo}
                    subtitulo={this.language().box2.subtitulo}
                    texto={this.language().box2.texto}
                    fundo={ImgQuemPode}
                />
                <FAQBox 
                    titulo={this.language().box3.titulo}
                    subtitulo={this.language().box3.subtitulo}
                    texto={this.language().box3.texto}
                    fundo={ImgEquipe}
                />
                <FAQBox 
                    titulo={this.language().box4.titulo}
                    subtitulo={this.language().box4.subtitulo}
                    texto={this.language().box4.texto}
                    fundo={ImgLocal}
                />
                <FAQBox 
                    titulo={this.language().box5.titulo}
                    subtitulo={this.language().box5.subtitulo}
                    texto={this.language().box5.texto}
                    fundo={ImgRemoto}
                />
                <FAQBox 
                    titulo={this.language().box6.titulo}
                    subtitulo={this.language().box6.subtitulo}
                    texto={this.language().box6.texto}
                    fundo={ImgNaoDesenvolvedor}
                />
                <FAQBox 
                    titulo={this.language().box7.titulo}
                    subtitulo={this.language().box7.subtitulo}
                    texto={this.language().box7.texto}
                    fundo={ImgLevarJogo}
                />
                <FAQBox 
                    titulo={this.language().box8.titulo}
                    subtitulo={this.language().box8.subtitulo}
                    texto={this.language().box8.texto}
                    fundo={ImgMostrarEvento}
                />
                <FAQBox 
                    titulo={this.language().box9.titulo}
                    texto={this.language().box9.texto}
                    fundo={ImgQuemVence}
                />
            </main>
        );
    }
}