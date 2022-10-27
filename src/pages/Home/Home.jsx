import * as API from 'services/themoviedb-API';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList';
import { useLocation } from 'react-router-dom';
import { Section } from 'components/reusableComponents/Section/Section';

export default function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    API.getTrendingMovies(controller)
      .then(setMoviesData)
      .catch(error => console.log('request error - ', error));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Section>
      <h1>Trending today:</h1>
      {moviesData.length > 0 && (
        <MoviesList moviesData={moviesData} location={location} />
      )}
    </Section>
  );
}
