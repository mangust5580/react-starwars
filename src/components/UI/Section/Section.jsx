import React from 'react';

import cn from 'classnames';
import styles from './Section.module.scss';

export const Section = ({ children, className }) => {
  return <section className={cn(styles.section, className)}>{children}</section>;
};
