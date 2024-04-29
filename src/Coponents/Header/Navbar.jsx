import React, { Component } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.scss";
import Logo from './img/Logo.svg';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isMenuOpen: false
        };
    }

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    render() {
        return (
            <header>
                <section className='Conteiner'>
                    <div className="Navbar">
                        <div className="navs">
                            <div className="nav-logo">
                                <img src={Logo} alt="" />
                            </div>

                          


                        <div className={`nav-items ${this.state.isMenuOpen ? 'open' : ''}`}>
                            <a href="#">Home</a>
                            <a href="#">About us</a>
                            <a href="#">Menu</a>
                            <a href="#">Features</a>
                            <a href="#">Contact us</a>
                        </div>
                        </div>

                      

                        <div className="nav-btn">
                            <button>Booking Now</button>
                            <div className="menu-icon" onClick={this.toggleMenu}>
                                <AiOutlineMenu />
                            </div>
                        </div>
                    </div>

                   
                </section>
            </header>
        )
    }
}
