import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/foto.PNG'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [textIndex, setTextIndex] = useState(0);
    const dynamicTexts = ["Desarrollar Full Stack", "Desarrollador React", "Desarrollador Angular","Desarrollador node.js","Desarrollador javascript","Desarrollador php","Desarrollador C#"];

     useEffect(() => {
        const intervalId = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
        }, 4000); // Cambia cada 2 segundos

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hola, yo soy <br /> {Bio.name}</Title>
                        <TextLoop>
                            <span className="dynamic-text fade">
                               {dynamicTexts[textIndex]}
                            </span>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: false,
                                        loop: false,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href="/cv-arturo-oficial.pdf" target='display'>Descargar CV</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection