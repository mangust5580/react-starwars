import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@context/ThemeProvider';
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@constants/theme';

import styles from './ChooseSide.module.scss';
import cn from 'classnames';

const ChooseSideItem = ({ theme, text, classes }) => {
  const isTheme = useTheme();
  return (
    <button
      className={cn(styles.btn, classes)}
      onClick={() => {
        isTheme.change(theme);
      }}>
      <span className={styles.btnText}>{text}</span>
    </button>
  );
};

ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.string,
};

export const ChooseSide = () => {
  const btns = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      classes: styles.btn__lightSide,
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      classes: styles.btn__darkSide,
    },
    {
      theme: THEME_NEUTRAL,
      text: 'Neutral Side',
      classes: styles.btn__neutralSide,
    },
  ];

  return (
    <ul className={styles.list}>
      {btns.map((btn, index) => (
        <li className={styles.item} key={index}>
          <ChooseSideItem theme={btn.theme} text={btn.text} classes={btn.classes} />
        </li>
      ))}
    </ul>
  );
};
