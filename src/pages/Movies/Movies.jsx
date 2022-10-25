import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as API from '../../services/themoviedb-API';
import MoviesList from 'components/MoviesList';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    if (query === '') return;

    API.fetchMovies(query)
      .then(response => setMoviesData(API.normalizeMoviesData(response)))
      .catch(error => console.log('search movies error - ', error));
  }, [query]);

  useEffect(() => {
    console.log(moviesData);
  }, [moviesData]);

  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, _) => setQuery(values.query.trim())}
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
      <MoviesList moviesData={moviesData} />
    </>
  );
}
