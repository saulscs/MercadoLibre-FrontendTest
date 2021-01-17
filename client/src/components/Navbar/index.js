import React from 'react';


import "./navbar.css";
import MercadoLogo from '../../assets/Logo_ML@2x.png.png';


const Navbar = ( props ) => {
    return(
    <header className="header">
        <section className="header__section grid">
            <div className="header__logo">
                <img src={MercadoLogo} alt="MercadoLibre-logo"/>
            </div>
            <div className="searchBox">
                <form className="searchBox__form">
                    <input 
                        className="searchBox__form--input"
                        type="text"
                        aria-label="Buscar"
                        placeholder="Nunca dejes de buscar"
                    />
                    <button type="submit"></button>
                </form>
            </div>
        </section>
    </header>
    )
}

export default Navbar;