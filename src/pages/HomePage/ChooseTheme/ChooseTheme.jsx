import React from 'react';
import { Container, Section, Title } from '@components/UI';
import { ChooseSide } from '@components/shared';

import styles from './ChooseTheme.module.scss';

export const ChooseTheme = () => {
  return (
    <Section className={styles.chooseTheme}>
      <Container>
        <Title>Choose your side</Title>
        <ChooseSide />
      </Container>
    </Section>
  );
};
