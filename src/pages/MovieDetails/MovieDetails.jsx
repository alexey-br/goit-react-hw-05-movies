import { Section } from 'components/reusableComponents/Section/Section';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Button } from 'components/reusableComponents/Button/Button';
import * as API from '../../services/themoviedb-API';
import MovieInfo from 'components/MovieInfo';
import AddInfoMenu from 'components/AddInfoMenu';
import { useRef } from 'react';

export default function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const { id: movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();

    API.getMovieInfo(movieId, controller)
      .then(setMovieInfo)
      .catch(error => console.log('get movie info error - ', error));

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Section>
      <Link to={backLinkHref.current}>
        <Button type="button">Go back</Button>
      </Link>
      {movieInfo.title && <MovieInfo movieInfo={movieInfo} />}
      <AddInfoMenu />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
}
