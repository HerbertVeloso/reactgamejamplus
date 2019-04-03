import React from 'react';

import Countdown from '../components/Countdown';
import Contact from '../components/Contact';

import Title from '../helpers/Title';
import TransparentBox from '../helpers/TransparentBox';

import bannerPT from '../assets/images/banner.jpg';
import bannerEN from '../assets/images/bannerIngles.jpg';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pt: {
        banner: bannerPT,
        edicao: "Edição anterior",
        mapa: "Cidades participantes"
      },
      en: {
        banner: bannerEN,
        edicao: "Past Edition",
        mapa: "Cities Confirmed"
      }
    }
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
          console.log(localStorage)
            return this.state.en; 
        }
    }
  }

  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    return (
      <main>
        <img src={this.language().banner} alt="A maior game jam da américa latina" />
        <Countdown date={`${year}-08-02T00:00:00`} />
        <section className="container"  data-aos="fade-right">
          <Title titulo={this.language().edicao} subtitulo="Game Jam +" />
          <div className="boxResponsive">
            <figure>
              <iframe className="video" title="video" src="https://www.youtube.com/embed/uA6h5yIlgXU"  frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </figure>
          </div>
        </section>
        <section className="nextEdition">
          <TransparentBox />
        </section>
        <section className="container"  data-aos="fade-left">
          <Title titulo={this.language().mapa} subtitulo="Game Jam +" inverse />
          <div className="boxResponsive">
            <figure>
              <iframe className="map" title="map" src="https://www.google.com/maps/d/embed?mid=1xkUh8jGF4mpjbBvMZJxHrE5vV5qNkPix" frameBorder="0" allowFullScreen></iframe>
            </figure>
          </div>
        </section>
        <Contact />
      </main>
    );
  }
}