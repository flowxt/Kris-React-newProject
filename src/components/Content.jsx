import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import image from '../images/logo.png';

const Content = () => {
    const logoRef = useRef(null);
    const ulRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(logoRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
        gsap.fromTo(ulRef.current.children, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
    }, []);

    return (
        <>
        <div className='container-header bg-gradient-to-b from-pink-100 via-pink-200 to-fuchsia-300 flex flex-col md:flex-row justify-center items-center lg:h-screen md:h-screen'>
            <div className='logo-solo flex pt-4 md:pt-0 md:pr-8' ref={logoRef}>
                <img src={image} alt='logo' className='h-full border-4 border-pink-200 rounded-full' />
            </div>
            <div className='content-logo flex flex-col items-center md:items-start p text-center md:text-left'>
                <h1 className='text-2xl md:text-4xl font-bold text-[#9b2c84] font-custom3'>Kristelle Feron</h1>
                <p className='text-xl md:text-2xl font-medium text-[#6b4f77] italic font-custom2'>"Le changement n'est pas douloureux, seul la résistance l'est..."</p>
                <ul ref={ulRef} className="mt-8 space-y-4 text-lg md:text-3xl font-bold text-[#6c4f77] font-custom3 ml-8">
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
