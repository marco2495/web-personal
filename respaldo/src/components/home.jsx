import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/home.css';
import { ReactTyped } from 'react-typed';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpg';
import image3 from "../assets/image3.jpeg";
const Portafolio = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const images = [
        image1,
        image2,
        image3,
    ];
    const linkProjects=[
        "https://marco2495.github.io/tienda-online/",
        "https://marco2495.github.io/calculadora/",
        "https://marco2495.github.io/blog-personal/"

    ];
    const imageTittles = [
        "Tienda Online básica en ReactJS",
        "Calculadora básica en ReactJS",
        "Blog Personal básica ReactJS"
    ]
    return (
        <div className="slider-container">
            <h1>Algunos de mís proyectos:</h1>
            <Slider {...settings}>
                {Array.from({ length: 3 }, (_, index) => (
                    <div key={index} className="slide">
                        <h3 style={{ textAlign: "center" }}>  {imageTittles[index]} </h3>
                        <figure>
                            <img src={images[index]} alt={`Proyecto ${index + 1}`} onClick={ ()=> open(linkProjects[index]) }/>
                        </figure>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
function GameClicker() {

    return (
        <figure className='slide'>
            <img src="src/assets/sorpresa.jpeg" alt="" />
        </figure>
    );
}

const WelcomeMessage = () => {
    const [showButton, setShowbutton] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const handdleComplete = () => {
        setShowbutton(true);
    }
    const handdleClick = ()=>{
        setShowGame(true);
    }
    return (
        <>
            <div className="welcome-message">
                <ReactTyped
                    strings={[
                        '$:¡Bienvenido a mi portafolio!',
                        '$:Soy Marco, un desarrollador apasionado.',
                        '$:Explora mis proyectos y descubre cómo transformo ideas en realidad.',
                        '$:¡Espero que disfrutes tu visita!'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    onComplete={handdleComplete}
                />
            </div>
            {/* {showButton && (
                <div className="button-container" onClick={handdleClick}>
                    <button className='flecha-parpadeante'>
                        ¿Quieres una sorpresa?
                    </button>
                </div>
            )}
            {
                showGame && <GameClicker></GameClicker>
            } */}
        </>
    );
}
function Home() {
    return (
        <>
            <WelcomeMessage />
            <Portafolio/>
        </>
    );
}

export default Home;
