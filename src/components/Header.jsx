import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Car1 from '../images/car1.jpg';
import Car2 from '../images/car2.png';
import Car3 from '../images/car3.jpg';
import Car4 from '../images/car4.jpg';
import Car5 from '../images/car5.jpg';

const Header = () => {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);
    const baseImages = [Car1, Car2, Car3, Car4, Car5];
    const duplicateCount = 4; // Nombre de fois que nous dupliquons le set d'images
    const images = Array(duplicateCount).fill(baseImages).flat();

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
    }, []);

    return (
        <header className="header bg-gradient-to-t from-violet-400 to-purple-200 shadow-md py-4 px-8 h-screen">
            <ul className="text-center space-y-4 text-3xl font-bold mb-8">
                <li className="p-4 text-black">Soin Energétique</li>
                <li className="p-4 text-black">Accompagnement holistique</li>
                <li className="p-4 text-black">Libération émotionnelle</li>
            </ul>
            
            <div className="overflow-hidden">
                <motion.div 
                    ref={containerRef}
                    className="flex gap-4"
                    animate={{
                        x: [-width/2, -width],
                    }}
                    transition={{
                        x: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }
                    }}
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[256px]"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={src}
                                alt={`Slide ${index}`}
                                className="w-64 h-64 object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </header>
    );
};

export default Header;