import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { API_PERSON } from '@constants/api';
import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import cn from 'classnames';

import styles from './PersonPage.module.scss';

import { Container, Main, Section } from '@components/UI';
import { useDispatch, useSelector } from 'react-redux';

import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';
import { Person } from './Person/Person';

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      const resp = await getApiResource(`${API_PERSON}/${id}/`);

      setPersonFavorite(!!storeData[id]);

      setErrorApi(!resp);

      setPersonInfo([
        {
          title: 'Height',
          data: resp.height,
        },
        {
          title: 'Mass',
          data: resp.mass,
        },
        {
          title: 'Hair Color',
          data: resp.hair_color,
        },
        {
          title: 'Skin Color',
          data: resp.skin_color,
        },
        {
          title: 'Eye Color',
          data: resp.eye_color,
        },
        {
          title: 'Birth Color',
          data: resp.birth_color,
        },
        {
          title: 'Birth Year',
          data: resp.birth_year,
        },
        {
          title: 'Gender',
          data: resp.gender,
        },
      ]);

      setPersonName(resp.name);
      setPersonPhoto(getPeopleImage(id));

      resp.films.length && setPersonFilms(resp.films);
    })();
  }, []);

  const navigate = useNavigate();

  const onGoBack = (evt) => {
    evt.preventDefault();
    navigate(-1);
  };

  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(id));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [id]: {
            name: personName,
            img: personPhoto,
          },
        }),
      );
      setPersonFavorite(true);
    }
  };

  return (
    <Main className={styles.content}>
      <div className={styles.headerContent}>
        <Container>
          <button className={cn(styles.btn, styles.btn__back)} onClick={onGoBack}>
            Go Back
          </button>
        </Container>
      </div>
      <Person
        personName={personName}
        personInfo={personInfo}
        personFilms={personFilms}
        personPhoto={personPhoto}
        personFavorite={personFavorite}
        dispatchFavoritePeople={dispatchFavoritePeople}
      />
    </Main>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
