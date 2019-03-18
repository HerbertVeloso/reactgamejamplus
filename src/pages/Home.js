import React from 'react';

import Countdown from '../components/Countdown';
import Contact from '../components/Contact';

import Title from '../helpers/Title';
import TransparentBox from '../helpers/TransparentBox';

import banner from '../assets/images/banner.jpg';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pt: {
        edicao: "Edição anterior",
        mapa: "Cidades participantes"
      },
      en: {
        edicao: "Past Edition",
        mapa: "Cities Confirmed"
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
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    return (
      <main>
        <img src={banner} alt="A maior game jam da américa latina" />
        <Countdown date={`${year}-08-02T00:00:00`} />
        <section className="container"  data-aos="fade-right">
          <Title titulo={this.language().edicao} subtitulo="Game Jam +" />
          <div className="boxResponsive">
            <figure>
              <iframe className="video" title="video" src="https://www.youtube.com/embed/uA6h5yIlgXU"  frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </figure>
          </div>
        </section>
        <section className="container"  data-aos="fade-left">
          <Title titulo={this.language().mapa} subtitulo="Game Jam +" inverse />
          <div className="boxResponsive">
            <figure>
              <iframe className="map" title="map" src="https://www.google.com/maps/d/embed?mid=1xkUh8jGF4mpjbBvMZJxHrE5vV5qNkPix" frameBorder="0" allowFullScreen></iframe>
            </figure>
          </div>
        </section>
        <section className="nextEdition">
          <TransparentBox />
        </section>
        <Contact />
      </main>
    );
  }
}