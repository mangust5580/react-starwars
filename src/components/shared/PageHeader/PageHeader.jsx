import React from 'react';
import { Container } from '@components/UI';
import { MainNav, Logo, ToolBar } from '@components/shared';

import styles from './PageHeader.module.scss';

export const PageHeader = () => {
  return (
    <header className={styles.pageHeader}>
      <Container className={styles.container}>
        <Logo />
        <MainNav />
        <ToolBar />
      </Container>
    </header>
  );
};
