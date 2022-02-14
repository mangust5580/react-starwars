import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Main, Section, Title } from '@components/UI';

import notFoundImg from './img/not-found.png';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  let location = useLocation();

  return (
    <Main className={styles.content}>
      <Section className={styles.notFound}>
        <Container className={styles.container}>
          <Title appearance="vhidden">People</Title>
          <div className={styles.inner}>
            <img src={notFoundImg} alt="Not Found" width={250} height={230} />
            <p className={styles.description}>
              Not math for <u>{location.pathname}</u>
            </p>
          </div>
        </Container>
      </Section>
    </Main>
  );
};
