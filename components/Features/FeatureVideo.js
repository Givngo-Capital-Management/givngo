import React from 'react';
import styles from './FeatureVideo.module.scss';

export default function FeatureVideo(props) {
  const { id, title } = props;
  if (!id) {
    return null;
  }
  return (
    <div className={styles['video-container']}>
      <div className={styles.video}>
        <iframe
          title={title}
          src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F371994595%3Fapp_id%3D122963&dntp=1&url=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F371994595&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; encrypted-media;"
          allowFullScreen
          width="100%"
          height="100%"
          top="0"
          left="0"
        />
      </div>
    </div>
  );
}
