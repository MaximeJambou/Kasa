import React from 'react';

const Banner = ({ image,  children }) => {
    const bannerStyles = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div className="banner" style={bannerStyles}>
            {children}
        </div>
    );
};

export default Banner;
