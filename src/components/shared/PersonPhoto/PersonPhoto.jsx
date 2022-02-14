import React from 'react';
import PropTypes from 'prop-types';
import { GlobalSvgSelector } from '@assets/icons/global/GlobalSvgSelector';

import cn from 'classnames';
import styles from './PersonPhoto.module.scss';

export const PersonPhoto = ({ personPhoto, personName, personFavorite, dispatchFavoritePeople }) => {
  return (
    <div className={styles.photoContainer}>
      <img className={styles.photo} src={personPhoto} alt={personName} width={250} height={350} />
      <button
        className={personFavorite ? cn(styles.favoriteBtn, styles.favoriteBtnActive) : styles.favoriteBtn}
        onClick={dispatchFavoritePeople}>
        <GlobalSvgSelector id="favorite" />
      </button>
    </div>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
};
