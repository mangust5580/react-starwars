import React from 'react';

import { PageHeader } from '@components/shared';
import Router from '@routes/Router';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <PageHeader />
      <Router />
    </div>
  );
};
