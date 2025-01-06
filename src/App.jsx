import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Accompagnement from './pages/Accompagnement';
import Contact from './pages/Contact';
import Erreur404 from './pages/Erreur404';
import Navigation from './components/Navigation';


const App = () => {
  return (
    <BrowserRouter>
    
    <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accompagnement" element={<Accompagnement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;