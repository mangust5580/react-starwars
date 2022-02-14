import React, { lazy, Suspense } from 'react';
import { PersonInfo, PersonPhoto } from '@components/shared';
import { Container, Section, Title } from '@components/UI';

import styles from './Person.module.scss';

const PersonFilms = lazy(() => import('@components/shared/PersonFilms/PersonFilms'));

export const Person = ({
  personName,
  personPhoto,
  personInfo,
  personFilms,
  personFavorite,
  dispatchFavoritePeople,
}) => {
  return (
    <Section className={styles.person}>
      <Container className={styles.container}>
        <Title className={styles.title}>{personName}</Title>
        <div className={styles.inner}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personFavorite={personFavorite}
            dispatchFavoritePeople={dispatchFavoritePeople}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<span>Loading</span>}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </Container>
    </Section>
  );
};
