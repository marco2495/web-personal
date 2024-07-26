import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaLaptopCode } from 'react-icons/fa';
import '../styles/navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen+(!isOpen);
    };

    return (
        <nav className="Navegacion">
            <FaBars className="BurgerBtn" onClick={toggleMenu} />
            <div className="Logo">
                <span>NovaTech Solutions</span>
                <FaLaptopCode className="laptop" />
            </div>
            <nav className={`Panel ${isOpen ? 'active' : ''}`}>
                <div className="Menu">
                    <NavLink className="NavLink" to="/" onClick={toggleMenu}>Servicios</NavLink>
                    <NavLink className="NavLink" to="/about" onClick={toggleMenu}>Portafolio</NavLink>
                    <NavLink className="NavLink" to="/aprende" onClick={toggleMenu}>Certificaciones</NavLink>
                    <NavLink className="NavLink" to="/portfolio" onClick={toggleMenu}>Blog</NavLink>
                    <NavLink className="NavLink" to="/donaciones" onClick={toggleMenu}>Sobre mí</NavLink>
                </div>
            </nav>
        </nav>
    );
};

export default Navbar;
