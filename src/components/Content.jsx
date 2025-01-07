import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import image from '../images/logo.png';

const Content = () => {
    const logoRef = useRef(null);
    const ulRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        // Animation du titre et sous-titre
        gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo(subtitleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 });

        // Animation du logo avec effet de rebond
        gsap.fromTo(logoRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "bounce.out" });

        // Animation de la liste avec effet "vague"
        gsap.fromTo(ulRef.current.children, 
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out", delay: 0.6 }
        );

        // Animation du fond (effet de mouvement lent)
        gsap.to(".container-header", {
            backgroundPosition: "100% 100%",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <div className='container-header bg-gradient-to-b from-pink-100 via-pink-200 to-fuchsia-300 flex flex-col justify-center items-center lg:h-screen md:h-screen relative'>
            {/* Fond dynamique */}
            <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-pink-100 via-pink-200 to-fuchsia-300"></div>

            {/* Titre et sous-titre */}
            <div className="text-center py-16 px-4 md:px-8 z-10">
                <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-pink-800 mb-4">
                    Kristelle Feron
                </h1>
                <p ref={subtitleRef} className="text-xl md:text-2xl font-medium text-gray-700 italic font-custom2">
                    "Le changement n'est pas douloureux, seul la résistance l'est..."
                </p>
            </div>

            {/* Logo et liste */}
            <div className='flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left z-10'>
                <div className='logo-solo flex pt-4 md:pt-0 md:pr-8' ref={logoRef}>
                    <img src={image} alt='logo' className='h-32 md:h-48 border-4 border-pink-200 rounded-full' />
                </div>
                <div className='content-logo flex flex-col items-center md:items-start text-center md:text-left'>
                    <ul ref={ulRef} className="mt-8 space-y-4 text-lg md:text-3xl font-bold font-custom3 ml-8">
                        <li className="p-4">Soin Energétique</li>
                        <li className="p-4">Accompagnement holistique</li>
                        <li className="p-4">Libération émotionnelle</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Content;
