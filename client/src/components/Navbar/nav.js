import React from 'react';
import { Link, useHistory } from "react-router-dom";
import useSearch from '../../hooks/useSearch';

import "./navbar.css";
import MercadoLogo from '../../assets/images/Logo_ML@2x.png.png';


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
                <Link to="/">
                    <img src={MercadoLogo} alt="MercadoLibre-logo"/>
                </Link>
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