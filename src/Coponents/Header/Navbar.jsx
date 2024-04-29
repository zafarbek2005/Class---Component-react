import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Logo from './img/Logo.svg';
import "./Navbar.scss";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <div className="Container">
                <div className="Navbar">
                    <div className="navs">
                        <div className="nav-logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className={`nav-items ${isMenuOpen ? 'open' : 'close'}`}>
                            <a href="#">Home</a>
                            <a href="#">About us</a>
                            <a href="#">Menu</a>
                            <a href="#">Features</a>
                            <a href="#">Contact us</a>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <button onClick={toggleMenu} className="menu-icon">
                            <AiOutlineMenu />
                        </button>
                        <button>Booking Now</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
