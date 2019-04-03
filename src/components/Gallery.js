import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Gallery extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      accessibility: true,
      speed: 500,
      autoplaySpeed: 3000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="galeria">
        <Slider {...settings}>
            {this.props.fotos.map(
                item => {
                    return  (
                        <div>
                            <img
                                src={item.src}
                            />
                        </div>
                    );
                }
            )}
        </Slider>
      </div>
    );
  }
}