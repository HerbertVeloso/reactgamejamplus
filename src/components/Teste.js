import React from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/images/logo.png';

export default class Navbar extends React.Component{
    constructor(props) {
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

        this.menuMobile = this.menuMobile.bind(this);
        this.scrollSmooth = this.scrollSmooth.bind(this);
        this.removeClass = this.removeClass.bind(this);
    }

    language(){
        const lang = navigator.language;

        if(lang === 'pt-BR' || lang === 'pt'){
            return this.state.pt;
        } else {
            return this.state.en;        
        }
    }

    menuMobile(){
        const menu = document.getElementById('menu');
        const menuVerifica = menu.classList.contains('open');
        if(menuVerifica){
            menu.classList.remove("open");
        } else{
           menu.classList.add("open");
        }
    }

    scrollSmooth(event) {
        const element = event.currentTarget;

        const verificaImg = element.querySelector('img');

        if(!verificaImg){
            const windowWidth = window.innerWidth;

            if (windowWidth <= 768){
                this.menuMobile();
            }
        }

        window.scrollTo(0,0);

        // element.classList.add("active");
    }


    getTop(){
        const menu = document.getElementById("menu");
        const ul = menu.getElementsByTagName("ul");
        const links = ul[0].getElementsByTagName("a");
        return links
    }

    removeClass(){
        const links = this.getTop();

        for (let i=0; i<links.length; i++ ){
            links[i].classList.remove("active");
        }
    }

    componentDidMount = () =>  {
        window.scrollTo(0,0);
    }

    render(){
        return(
            <header className="teste" id="menu">
                <nav className="container">
                    <Link to="/">
                        <img src={logo} alt="Logo Educap" />
                    </Link>
                    <input type="checkbox" id="teste__toggle" />
                    <label className="teste__toggle" onClick={this.menuMobile}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                    <ul>
                        <li>
                            {/* <a href="#body" onClick={this.scrollSmooth}>Home</a> */}
                            <Link to="/" className="menu__link" onClick={this.scrollSmooth}>{ this.language().home }</Link>
                        </li>
                        <li>
                            <Link to="/comofunciona" className="menu__link"  onClick={this.scrollSmooth}>{ this.language().comoFunciona }</Link>
                        </li>
                        <li>
                            <span className="menu__span">
                                { this.language().organizadores }
                            </span>
                            <ul>
                                <li>
                                    <Link to="/organizadores?2019" className="menu__link" onClick={this.scrollSmooth}>2019</Link>
                                </li>
                                <li>
                                    <Link to="/organizadores?2018" className="menu__link" onClick={this.scrollSmooth}>2018</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/faq" className="menu__link"  onClick={this.scrollSmooth}>{ this.language().faq }</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}