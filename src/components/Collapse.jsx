import React, { useState } from 'react';
import arrowUp from "../assets/images/arrow_up.png";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-title" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img src={arrowUp} alt="Toggle" className={isOpen ? "rotate" : ""} />
            </div>
            <div className="collapse-content">
                {children}
            </div>
        </div>
    );
};

export default Collapse;
