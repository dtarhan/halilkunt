import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import HomePage from './pages/homepage/HomePage';
import About from './pages/hakkimda/About';
import Contact from './pages/contact/Contact';
import Saglikkoclugu from './pages/saglikkoclugu/Saglikkoclugu';
import Beslenmedanismanligi from './pages/beslenmedanismanligi/Beslenmedanismanligi';
import BeslenmeDetail from './pages/beslenmedanismanligi/BeslenmeDetail';
import Egitimkoclugu from './pages/egitimkoclugu/EgitimKoclugu';
import YasamKoclugu from './pages/yasamkoclugu/YasamKoclugu';
import KilovermeDetails from './pages/beslenmedanismanligi/KilovermeDetails';


function App() {
  return (
    <div style={{ backgroundColor: "rgba(40, 178, 25,0.3)" }} > 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/saglik-rehberi" element={<Saglikkoclugu />} />
        <Route path="/beslenme-rehberi" element={<Beslenmedanismanligi/>} />
        <Route path="/beslenme-details" element={<BeslenmeDetail/>} />
        <Route path="/egitim-rehberi" element={<Egitimkoclugu/>} />
        <Route path="/yasam" element={<YasamKoclugu/>} />
        <Route path="/kilo-verme-details" element={<KilovermeDetails/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/iletisim" element={<Contact/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
