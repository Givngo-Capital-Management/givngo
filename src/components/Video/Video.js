import React from 'react';
import './Video.scss';

const BASE_EMBED_URL = 'https://player.vimeo.com/video/';

export default function Video(props) {
  const { id, title } = props;
  if (!id) {
    return null;
  }
  const embedUrl = `${BASE_EMBED_URL}${id}?autoplay=1`;
  return (
    <div className="video-container">
      <div className="video">
        <iframe
          title={title}
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}
