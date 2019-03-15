import React from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/images/logo.png';

export default class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pt: {
                home: "Home",
                comoFunciona: "Como Funciona?",
                organizadores: "Organizadores",
                faq: "FAQ"
            },
            en: {
                home: "Home",
                comoFunciona: "How it works?",
                organizadores: "Organizers",
                faq: "FAQ"
            }
        }
    }
    componentDidMount = () =>  {
        window.scrollTo(0,0);
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
        <header className="menu">
            <nav className="container">
                <Link to="/">
                    <img src={logo} alt="Logo Game Jam Plus" />
                </Link>
                    <input type="checkbox" id="menu__toggle" />
                    <label className="menu__toggle" htmlFor="menu__toggle">&#9776;</label>
                <ul className="teste">
                    <li>
                        <Link to="/" className="menu__link">{ this.language().home }</Link>
                    </li>
                    <li>
                        <Link to="/comofunciona" className="menu__link">{ this.language().comoFunciona }</Link>
                    </li>
                    <li>
                        <span className="menu__link">
                            { this.language().organizadores }
                        </span>
                        <ul>
                            <li>
                                <Link to="/organizadores?2019" className="menu__link">2019</Link>
                            </li>
                            <li>
                                <Link to="/organizadores?2018" className="menu__link">2018</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/faq" className="menu__link">{ this.language().faq }</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}