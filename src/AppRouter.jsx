import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import LodgingPage from './pages/LodgingPage';

import Header from './components/Header';
import Footer from './components/Footer';


const AppRouter = () => {
    return (
    <Router>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/logement/:id" element={<LodgingPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
    </Router>
    );
};

export default AppRouter;
