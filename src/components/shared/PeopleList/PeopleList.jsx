import React from 'react';
import PropTypes from 'prop-types';

import { PeopleCard } from '@components/shared';

import cn from 'classnames';
import styles from './PeopleList.module.scss';

export const PeopleList = ({ people, className }) => {
  return (
    <ul className={cn(styles.peopleList, className)}>
      {people?.map(({ id, name, img }) => (
        <li key={id}>
          <PeopleCard id={id} img={img} name={name} />
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};
