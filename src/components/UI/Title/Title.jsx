import React from 'react';

import cn from 'classnames';
import styles from './Title.module.scss';

export const Title = ({ tag = 'h2', appearance, className, children }) => {
  const classes = {
    [styles.vhidden]: appearance === 'vhidden',
  };
  switch (tag) {
    case 'h1':
      return <h1 className={cn(styles.h1, className, classes)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(styles.h2, className, classes)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(styles.h3, className, classes)}>{children}</h3>;
    default:
      return <></>;
  }
};
