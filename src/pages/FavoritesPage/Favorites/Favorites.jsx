import React from 'react';
import { Container, Section } from '@components/UI';
import { PeopleList } from '@components/shared';

export const Favorites = ({ people }) => {
  return (
    <Section className={StyleSheet.favorites}>
      <Container>{people.length ? <PeopleList people={people} /> : <p>No Data</p>}</Container>
    </Section>
  );
};
