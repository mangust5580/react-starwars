import React from 'react';
import { Container, Section, Title } from '@components/UI';
import { PeopleList, PeopleNavigation } from '@components/shared';

import styles from './People.module.scss';

export const People = ({ prevPage, nextPage, counterPage, people, getResource }) => {
  return (
    <Section className={styles.people}>
      <Container>
        <Title appearance="vhidden">People</Title>
        <PeopleNavigation getResource={getResource} prevPage={prevPage} nextPage={nextPage} counterPage={counterPage} />
        <PeopleList people={people} />
      </Container>
    </Section>
  );
};
