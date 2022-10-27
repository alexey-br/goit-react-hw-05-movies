import { useState, useEffect } from 'react';
import * as API from '../../services/themoviedb-API';
import MoviesList from 'components/MoviesList';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Section } from 'components/reusableComponents/Section/Section';
import SearchBox from 'components/SearchBox';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') return;

    const controller = new AbortController();

    API.fetchMovies(query, controller)
      .then(setMoviesData)
      .catch(error => console.log('search movies error - ', error));

    return () => {
      controller.abort();
    };
  }, [query]);

  const onSearch = text => setSearchParams(text !== '' ? { query: text } : {});

  return (
    <Section>
      <SearchBox onSearch={onSearch} query={query} />
      {moviesData.length > 0 && (
        <MoviesList moviesData={moviesData} location={location} />
      )}
    </Section>
  );
}
