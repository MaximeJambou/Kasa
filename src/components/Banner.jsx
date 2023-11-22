import React from 'react';
import PropTypes from 'prop-types';

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

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Banner;