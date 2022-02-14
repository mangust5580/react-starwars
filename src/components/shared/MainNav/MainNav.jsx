import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainNav.module.scss';

export const MainNav = () => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/people/?page=1">
            People
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/not-found">
            Not Found
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/search">
            Search
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/fail">
            Fail
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
