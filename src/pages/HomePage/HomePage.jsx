import React from 'react';
import { Main } from '@components/UI';
import { ChooseTheme } from './ChooseTheme/ChooseTheme';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <Main className={styles.content}>
      <ChooseTheme />
    </Main>
  );
};
