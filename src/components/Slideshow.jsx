import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRight from "../assets/images/arrow_right.png";
import ArrowLeft from "../assets/images/arrow_left.png";

function Slideshow({ slides }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    return (
        <div className="slideshow">
            {slides.length > 0 && (
                <>
                    <img src={slides[current]} alt={`Slide ${current + 1}`} className="slideshow__cover" />
                    {slides.length > 1 && (
                        <>
                            <img src={ArrowLeft} alt="Précédent" className="arrowLeft" onClick={previousSlide} />
                            <img src={ArrowRight} alt="Suivant" className="arrowRight" onClick={nextSlide} />
                            <div className="numbering">
                                {`${current + 1}/${slides.length}`}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

Slideshow.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Slideshow;