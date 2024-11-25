import React from 'react'
import '/Users/josep/Web_Development/Patricia_Manfredi/style/style.css';
import fondo from "/Users/josep/Web_Development/Patricia_Manfredi/img/inicio.png";

const Home = () => {
    return (
        <>
        <div className="Home">
            <img src={fondo} alt="Fondo Patricia Manfredi" className="home-logo" />
            </div>
        </>  
    );
}

export default Home