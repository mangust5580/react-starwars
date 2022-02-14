import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import styles from './Field.module.scss';
import { GlobalSvgSelector } from '@assets/icons/global/GlobalSvgSelector';

export const Field = ({ value, onChange, placeholder, type, className, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={cn(styles.field, className)}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        {...props}
      />
      {value && (
        <button className={styles.btn} onClick={() => value && onChange('')}>
          <GlobalSvgSelector id="close" />
        </button>
      )}
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  onChangeField: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
