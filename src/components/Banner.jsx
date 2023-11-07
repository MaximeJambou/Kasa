import React from 'react';

const Banner = ({ image,  children }) => {
    const bannerStyles = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div className="banner" style={bannerStyles}>
            <div className="banner__content">{children}</div>
        </div>        
    );
};

export default Banner;


