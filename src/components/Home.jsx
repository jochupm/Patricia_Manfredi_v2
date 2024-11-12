import React from 'react'
import '/Users/josep/Desktop/Web_Development/ReactJs/Patricia_Manfredi/style/style.css';
import fondo from '/Users/josep/Desktop/Web_Development/ReactJs/Patricia_Manfredi/img/fondo.png';

const Home = () => {
    return (
        <>
            <img src={fondo} alt="Fondo Patricia Manfredi" className="home-logo" />
            <h1>Lorem ipsum dolor sit amet.</h1>       
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
        </>  
    );
}

export default Home