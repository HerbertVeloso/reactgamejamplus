import React from 'react';
import Galeria from 'react-grid-gallery';

import f01 from '../assets/images/edicoes/2018/01.png';
import f02 from '../assets/images/edicoes/2018/02.png';
import f03 from '../assets/images/edicoes/2018/03.png';
import f04 from '../assets/images/edicoes/2018/04.png';
import f05 from '../assets/images/edicoes/2018/05.png';
import f06 from '../assets/images/edicoes/2018/06.png';
import f07 from '../assets/images/edicoes/2018/07.png';
import f08 from '../assets/images/edicoes/2018/08.png';
import f09 from '../assets/images/edicoes/2018/09.png';
import f10 from '../assets/images/edicoes/2018/10.jpg';
import f11 from '../assets/images/edicoes/2018/11.jpg';
import f12 from '../assets/images/edicoes/2018/12.jpg';
import f13 from '../assets/images/edicoes/2018/13.jpg';
import f14 from '../assets/images/edicoes/2018/14.jpg';

const IMAGES =
[{
        src: f01,
        thumbnail: f01,
        thumbnailWidth: 150,
        thumbnailHeight: 100,
        // caption: "01"
},
{
        src: f02,
        thumbnail: f02,
        thumbnailWidth: 150,
        thumbnailHeight: 100,
        // caption: "02"
}, 
{
        src: f03,
        thumbnail: f03,
        thumbnailWidth: 300,
        thumbnailHeight: 200
}, {
        src: f04,
        // thumbnail: f04,
        // thumbnailWidth: 320,
        thumbnailHeight: 212
}, {
        src: f05,
        thumbnail: f05,
        // thumbnailWidth: 500,
        // thumbnailHeight: 280
}, {
    src: f06,
    thumbnail: f06,
    // thumbnailWidth: 320,
    // thumbnailHeight: 212
}, {
    src: f07,
    thumbnail: f07,
    // thumbnailWidth: 320,
    // thumbnailHeight: 212
}, {
    src: f08,
    thumbnail: f08,
    // thumbnailWidth: 320,
    // thumbnailHeight: 212
}, {
    src: f09,
    thumbnail: f09,
    // thumbnailWidth: 320,
    // thumbnailHeight: 212
}, {
    src: f10,
    thumbnail: f10,
    // thumbnailWidth: 320,
    // thumbnailHeight: 212
}, {
    src: f11,
    thumbnail: f11,
    // thumbnailWidth: 320,
    // thumbnailHeight: 212
}, {
    src: f12,
    thumbnail: f12,
    // thumbnailWidth: 320,
    // thumbnailHeight: 212
}, {
    src: f13,
    thumbnail: f13,
    // thumbnailWidth: 320,
    // thumbnailHeight: 212
}, {
    src: f14,
    thumbnail: f07,
    // thumbnailWidth: 100,
    // thumbnailHeight: 50
}]
 
export default class Gallery extends React.Component {
    render(){
        return (
            <Galeria images={IMAGES} enableImageSelection={false} />
        )
    }
}