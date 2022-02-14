import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';

import styles from './PeopleCard.module.scss';

export const PeopleCard = ({ id, img, name }) => {
  // const dispatch = useDispatch();

  // const set = () => {
  //   dispatch(
  //     setPersonToFavorite({
  //       [id]: {
  //         name: name,
  //         img: img,
  //       },
  //     }),
  //   );
  // };

  // const remove = () => {
  //   dispatch(removePersonFromFavorite(id));
  // };

  return (
    <div className={styles.peopleCard}>
      <figure className={styles.figure}>
        <img src={img} alt={name} width={200} height={275} />
        <figcaption className={styles.imgCaption}>{name}</figcaption>
        <Link to={`/people/${id}`} className={styles.link}></Link>
      </figure>
      {/* <button onClick={set}>ADD</button> */}
      {/* <button onClick={remove}>REMOVE</button> */}
    </div>
  );
};
