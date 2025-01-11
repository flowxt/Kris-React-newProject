import React from 'react';
import Content from '../components/Content';
import Presentation from '../components/Presentation';
import Card from '../components/Card';
import Cards from '../components/Cards';



const Accueil = () => {
    return (
        <>
        <div>
            <Content />
            <Presentation />
            
        </div>
        <div className='flex justify-center'>
        <Cards />
        </div>
        </>
    );
};

export default Accueil;