import { useState, useEffect } from 'react';
import * as API from '../../services/themoviedb-API';

export default function Movies() {
  const [query, setQuery] = useState('batman');
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    API.fetchMovies(query)
      .then(response => setMoviesData(API.normalizeMoviesData(response)))
      .catch(error => console.log('search movies error - ', error));
  }, [query]);

  return;
}
