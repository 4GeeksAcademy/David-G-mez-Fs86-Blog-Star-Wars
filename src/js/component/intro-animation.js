import React, { useEffect, useState } from 'react';
import '../../styles/intro-animation.css';

const IntroAnimation = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowText(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`intro-container ${showText ? 'start-animation' : ''}`}>
            <h1>¡Bienvenido a al universo de Star Wars!</h1>
            <p>Explora los personajes, planetas, vehiculos
                y guarda tus favoritos!</p>
            <img src='https://preview.redd.it/m182f70smoe51.png?width=1080&crop=smart&auto=webp&s=422d1620917140967dbba2e702dbd8d411aed2e0'/>

        </div>
    );
};

export default IntroAnimation;