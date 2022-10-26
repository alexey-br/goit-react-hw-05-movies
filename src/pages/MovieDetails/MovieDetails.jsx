import { Section } from 'components/reusableComponents/Section/Section';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Button } from 'components/reusableComponents/Button/Button';
import * as API from '../../services/themoviedb-API';
import MovieInfo from 'components/MovieInfo';
import AddInfoMenu from 'components/AddInfoMenu';

export default function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const { id: movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    API.getMovieInfo(movieId)
      .then(response => response.data)
      .then(data => setMovieInfo(API.normalizeMovieInfo(data)))
      .catch(error => console.log('get movie info error - ', error));
  }, [movieId]);

  return (
    <Section>
      <Link to={backLinkHref}>
        <Button type="button">Go back</Button>
      </Link>
      <MovieInfo movieInfo={movieInfo} />
      <AddInfoMenu />
      <Outlet />
    </Section>
  );
}
