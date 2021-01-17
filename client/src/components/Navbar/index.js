import React from 'react';
import { Link, useHistory } from "react-router-dom";
import useSearch from '../../helpers/useSearch';

import "./navbar.css";
import MercadoLogo from '../../assets/Logo_ML@2x.png.png';


const Navbar = ( ) => {
    const { value, bind } = useSearch("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/items?q=${value}`);
    };


    return(
    <header className="header">
        <section className="header__section grid">
            <div className="header__logo">
                <img src={MercadoLogo} alt="MercadoLibre-logo"/>
            </div>
            <div className="searchBox">
                <form className="searchBox__form"  onSubmit={handleSubmit}>
                    <input 
                        className="searchBox__form--input"
                        type="text"
                        aria-label="Buscar"
                        placeholder="Nunca dejes de buscar"
                        {...bind}
                    />
                    <button type="submit"></button>
                </form>
            </div>
        </section>
    </header>
    )
}

export default Navbar;