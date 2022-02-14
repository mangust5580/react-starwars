import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import cn from 'classnames';
import styles from './PeopleNavigation.module.scss';

export const PeopleNavigation = ({ prevPage, nextPage, counterPage, getResource }) => {
  const onChangeNext = () => {
    getResource(nextPage);
  };
  const onChangePrev = () => {
    getResource(prevPage);
  };

  return (
    <div className={styles.peopleNavigation}>
      <Link
        className={cn(!prevPage ? styles.disabled : null, styles.link)}
        to={`/people/?page=${counterPage - 1}`}
        onClick={onChangePrev}>
        Previous
      </Link>
      <Link
        className={cn(!nextPage ? styles.disabled : null, styles.link)}
        to={`/people/?page=${counterPage + 1}`}
        onClick={onChangeNext}>
        Next
      </Link>
    </div>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};
