import React, { useState } from 'react';
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@constants/theme';

import styles from './Logo.module.scss';
import { useTheme } from '@context/ThemeProvider';
import { useEffect } from 'react';

import imgLightLogo from './img/lightLogo.svg';
import imgDarkLogo from './img/darkLogo.svg';
import imgNeutralLogo from './img/neutralLogo.svg';

export const Logo = () => {
  const [logo, setLogo] = useState(imgNeutralLogo);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setLogo(imgLightLogo);
        break;
      case THEME_DARK:
        setLogo(imgDarkLogo);
        break;
      case THEME_NEUTRAL:
        setLogo(imgNeutralLogo);
        break;
      default:
        setLogo(imgNeutralLogo);
    }
  }, [isTheme]);

  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo" width={60} height={60} />
    </div>
  );
};
