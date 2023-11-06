import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

// Ajout descomposants
import Header from './components/Header';


const AppRouter = () => {
    return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    );
};

export default AppRouter;
