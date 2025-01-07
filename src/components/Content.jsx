import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import image from '../images/logo.png';

const Content = () => {
    const logoRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(logoRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
    }, []);

    return (
        <>
        <div className='container-header bg-gradient-to-r from-purple-100 to-pink-200 flex flex-col md:flex-row justify-center items-center '>
            <div className='logo-solo flex pt-4 md:pt-0 md:pr-8' ref={logoRef}>
                <img src={image} alt='logo' className='h-full border-4 border-pink-200 rounded-full' />
            </div>
            <div className='content-logo flex flex-col items-center md:items-start p text-center md:text-left'>
                <h1 className='text-2xl md:text-4xl font-bold font-custom3'>Kristelle Feron</h1>
                <p className='text-xl md:text-2xl font-custom2'>"Le changement n'est pas douloureux, seul la résistance l'est..."</p>
                <ul className="mt-8 space-y-4 text-lg md:text-3xl font-bold font-custom2 ml-8">
                    <li className="p-4">Soin Energétique</li>
                    <li className="p-4">Accompagnement holistique</li>
                    <li className="p-4">Libération émotionnelle</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Content;