import React from 'react';
import { Section, Container, Video } from '@components/UI';
import video from '@assets/video/han-solo.mp4';

import styles from './ErrorMessage.module.scss';

export const ErrorMessage = () => {
  return (
    <Section className={styles.errorMessage}>
      <Container className={styles.container}>
        <div className={styles.inner}>
          <Video src={video} className={styles.video} playbackRate={1.0} />
          <p className={styles.text}>
            The dark side of the force has won. <br />
            We cannot display data. <br />
            Come back when we fix everything
          </p>
        </div>
      </Container>
    </Section>
  );
};
