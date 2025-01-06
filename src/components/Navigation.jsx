import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../images/logo.png';

const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/accompagnement", label: "Suivi & Accompagnement" },
    { path: "/contact", label: "Contact" }
];

const Navigation = () => {
    return (
        <div className="navigation bg-gradient-to-b from-violet-400 to-purple-200  py-4 px-8">
            <div className='flex justify-between items-center'>
                <div className='logo flex items-center space-x-4'>
                    <img src={img1} alt='logo' className='hidden sm:block h-14 sm:h-16 md:h-20 lg:h-28' />
                    <h1 className='text-black text-sm sm:text-xl lg:text-2xl'>KrisLaVoixDesAnges</h1>
                </div>
                <ul className='flex space-x-4'>
                    {navLinks.map((link, index) => (
                        <NavLink 
                            key={index} 
                            to={link.path} 
                            className={(nav) => 
                                nav.isActive 
                                ? "relative text-fuchsia-700 text-xs sm:text-sm md:text-base lg:text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r from-purple-500 to-pink-500 after:scale-x-100 after:transition-transform after:duration-300" 
                                : "relative text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg hover:text-fuchsia-700 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r from-purple-500 to-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                            }
                        >
                            <li className="inline-block">
                                {link.label}
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navigation;