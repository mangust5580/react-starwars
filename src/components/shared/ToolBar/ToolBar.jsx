import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalSvgSelector } from '@assets/icons/global/GlobalSvgSelector';

import styles from './ToolBar.module.scss';
import { useSelector } from 'react-redux';

export const ToolBar = () => {
  const [count, setCount] = useState();

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCount('...') : setCount(length);
  });

  return (
    <Link className={styles.favoriteLink} to="/favorites">
      <GlobalSvgSelector id="bookmark" />
      <span className={styles.counter}>{count}</span>
    </Link>
  );
};
