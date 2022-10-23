import * as API from 'services/themoviedb-API';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    API.getTrendingMovies()
      .then(response => response.data.results)
      .then(data => setMoviesData(API.normalizeMoviesData(data)))
      .catch(error => console.log('request error - ', error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {moviesData.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
