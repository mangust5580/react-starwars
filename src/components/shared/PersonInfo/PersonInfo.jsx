import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonInfo.module.scss';

export const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.info}>
      <ul className={styles.list}>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li className={styles.item} key={title}>
                <span className={styles.title}>{title}</span>
                <span className={styles.data}>{data}</span>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};
