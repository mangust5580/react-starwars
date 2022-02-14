import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import styles from './Video.module.scss';

export const Video = ({ src, className, playbackRate = 1.0, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video className={cn(styles.video, className)} ref={videoRef} loop autoPlay muted {...props}>
      <source src={src} />
    </video>
  );
};

Video.propTypes = {
  src: PropTypes.string,
  playbackRate: PropTypes.number,
  className: PropTypes.string,
};
