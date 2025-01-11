import React from 'react';
import Card from './Card';
import geomancie from '../images/geomancie.png';
import enki from '../images/enki.png';
import natka from '../images/natka.png';
import michel from '../images/michel.png';
import lumi from '../images/lumi.png';


const Cards = () => {
    const collaborators = [
        {
            id: 1,
            image: geomancie,
            name: "Corinne Barreau",
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
            id: 3,
            image: lumi,
            name: "LUMI NAISSANT",
            description: "Réflexologie plantaire, palmaire pediatrique et oncologie et de magnétisme",
            buttonText: "Voir son profil",
            link: "https://lumi-naissant.com/",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {collaborators.map((collaborator) => (
                <Card
                    key={collaborator.id}
                    image={collaborator.image}
                    name={collaborator.name}
                    description={collaborator.description}
                    buttonText={collaborator.buttonText}
                />
            ))}
        </div>
    );
};

export default Cards;