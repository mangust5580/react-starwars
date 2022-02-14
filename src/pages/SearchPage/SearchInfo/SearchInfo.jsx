import React, { useState, useCallback, useEffect } from 'react';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { Section, Container, Field, Title } from '@components/UI';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PropTypes from 'prop-types';
import { PeopleList } from '@components/shared';
import { useDebounce } from '@hooks/useDebounce';

import styles from './SearchInfo.module.scss';

const SearchInfo = ({ setErrorApi }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [people, setPeople] = useState([]);

  const searchDebounce = useDebounce(searchQuery, 500);

  const getResponse = async (param) => {
    const resp = await getApiResource(API_SEARCH + param);

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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    if (searchDebounce) {
      getResponse(searchQuery);
    } else {
      getResponse('');
    }
  }, [searchDebounce]);

  const onChangeField = (value) => {
    setSearchQuery(value);
  };

  return (
    <Section>
      <Container>
        <Title>Search</Title>
        <Field
          className={styles.searchField}
          type="search"
          value={searchQuery}
          onChange={onChangeField}
          placeholder="Enter character name"
        />
        {people.length ? <PeopleList className={styles.list} people={people} /> : <h2>No results</h2>}
      </Container>
    </Section>
  );
};

SearchInfo.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchInfo);
