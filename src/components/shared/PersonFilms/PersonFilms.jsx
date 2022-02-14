import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { makeConcurrentRequest, changeHTTP } from '@utils/network';

import styles from './PersonFilms.module.scss';

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);

      setFilmsName(response);
    })();
  }, []);

  return (
    <div className={styles.films}>
      <ul className={styles.list}>
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) => (
            <li className={styles.item} key={episode_id}>
              <span className={styles.episodeId}>Episode {episode_id}</span>
              <span className={styles.episodeName}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};

export default PersonFilms;
