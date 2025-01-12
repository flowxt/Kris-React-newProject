import React from 'react';
import Content from '../components/Content';
import Presentation from '../components/Presentation';
import InfiniteMovingCards from '../components/InfiniteMovingCards';
import geomancie from '../images/geomancie.png';
import enki from '../images/enki.png';
import natka from '../images/natka.png';
import michel from '../images/michel.png';
import lumi from '../images/lumi.png';

const Accueil = () => {
    const collaborators = [
        {
            id: 1,
            image: geomancie,
            name: "Geomancie et hypnose",
            description: "Réponse à une question précise par la Géomancie (Haute-Savoie)",
            buttonText: "Voir son profil",
            link: "https://www.instagram.com/geomancie74.ge/",
        },
        {
            id: 2,
            image: enki,
            name: "Enki Bio-resonance",
            description: "Bio-résonance en haute-savoie",
            buttonText: "Voir son profil",
            link: "https://enki-bioresonance.fr/",
        },
        {
            id: 3,
            image: natka,
            name: "Natka, la clef du bien-être",
            description: "Réflexologie plantaire, palmaire pediatrique et oncologie et de magnétisme",
            buttonText: "Voir son profil",
            link: "https://www.natkalaclefdubienetre.fr/",
        },
        {
            id: 4,
            image: michel,
            name: "Michel Pirmaier",
            description: "Lecture de vie antérieure",
            buttonText: "Voir son profil",
            link: "https://www.nostredame.com/",
        },
        {
            id: 5,
            image: lumi,
            name: "LUMI NAISSANT",
            description: "Réflexologie plantaire, palmaire pediatrique et oncologie et de magnétisme",
            buttonText: "Voir son profil",
            link: "https://lumi-naissant.com/",
        },
    ];

    return (
        <>
            <div>
                <Content />
                <Presentation />
            </div>
            <div className='bg-gray-900 border-t-4 border-rose-400 flex flex-col items-center justify-center pt-7 px-6 space-y-8 font-custom2 pt-20'>
                <h2 className='text-6xl text-zinc-100 pb-2 border-b-2 border-rose-400'>Mes Collaborateurs & Partenaires</h2>
                <p className='text-zinc-100 text-xl font-custom3 pt-4 mx-9'>Je suis ravie de vous présenter mes collaborateurs et partenaires, des personnes de confiance partageant mes valeurs et ma passion pour le bien-être et l'harmonie. Chacun d'eux apporte une expertise unique dans son domaine, et ensemble, nous œuvrons pour vous offrir des soins et des accompagnements de qualité. Vous pouvez compter sur nous pour vous guider avec bienveillance sur votre chemin vers l'équilibre et la sérénité.</p>
                <div className='cards flex justify-center pt-20 pb-10 font-custom3'>
                    <InfiniteMovingCards items={collaborators} speed="slow" />
                </div>
            </div>
        </>
    );
};

export default Accueil;