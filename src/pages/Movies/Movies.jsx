import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as API from '../../services/themoviedb-API';
import MoviesList from 'components/MoviesList';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') return;

    API.fetchMovies(query)
      .then(response => setMoviesData(API.normalizeMoviesData(response)))
      .catch(error => console.log('search movies error - ', error));
  }, [query]);

  const onSearch = text => setSearchParams(text !== '' ? { query: text } : {});

  return (
    <>
      <Formik
        initialValues={{ query: query }}
        onSubmit={(values, _) => onSearch(values.query.trim())}
      >
        <Form>
          <Field
            name="query"
            autoComplete="off"
            type="text"
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {moviesData.length > 0 && (
        <MoviesList moviesData={moviesData} location={location} />
      )}
    </>
  );
}
