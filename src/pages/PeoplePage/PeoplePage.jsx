import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getApiResource, changeHTTP } from '@utils/network';
import { Main } from '@components/UI';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';
import { People } from './People/People';

import styles from './PeoplePage.module.scss';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    const resp = await getApiResource(url);

    if (resp) {
      const peopleList = resp.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setPrevPage(changeHTTP(resp.previous));
      setNextPage(changeHTTP(resp.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <Main className={styles.content}>
      <People
        people={people}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
        getResource={getResource}
      />
    </Main>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
