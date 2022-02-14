import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Main } from '@components/UI';

import styles from './FavoritesPage.module.scss';
import { Favorites } from './Favorites/Favorites';

export const FavoritesPage = () => {
  const [people, setPeople] = useState([]);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const result = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });

      setPeople(result);
    }
  }, []);

  return (
    <Main className={styles.content}>
      <Favorites people={people} />
    </Main>
  );
};
