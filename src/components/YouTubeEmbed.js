import React from 'react';
import PropTypes from 'prop-types';

const YouTubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
);

YouTubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YouTubeEmbed;