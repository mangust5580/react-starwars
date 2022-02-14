import React from 'react';

import cn from 'classnames';
import styles from './Main.module.scss';

export const Main = ({ children, className }) => {
  return <main className={cn(styles.content, className)}>{children}</main>;
};
