import React from 'react'
import '/Users/josep/Web_Development/Patricia_Manfredi/style/Home.css';
import fondo from "/Users/josep/Web_Development/Patricia_Manfredi/img/inicio.png";

const Home = () => {
    return (
        <>
    <div className="home-image-container">
            <img src={fondo} alt="Fondo Patricia Manfredi" className="home-image" />
            </div>
        </>  
    );
}

export default Home