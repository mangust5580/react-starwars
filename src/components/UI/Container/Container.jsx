import React from 'react';

import styles from './Container.module.scss';
import cn from 'classnames';

export const Container = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
