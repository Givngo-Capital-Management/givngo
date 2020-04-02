import React from 'react';
import styles from './Video.module.scss';

const BASE_EMBED_URL = 'https://player.vimeo.com/video/';

export default function Video(props) {
  const { id, title } = props;
  if (!id) {
    return null;
  }
  const embedUrl = `${BASE_EMBED_URL}${id}?autoplay=1`;
  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <iframe
          title={title}
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media;"
          allowFullScreen
        />
      </div>
    </div>
  );
}
