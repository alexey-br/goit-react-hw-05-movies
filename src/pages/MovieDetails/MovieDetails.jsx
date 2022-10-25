import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../../services/themoviedb-API';

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

  const { posterUrl, title, releaseYear, userScore, genresList, overview } =
    movieInfo;

  return (
    <>
      <Link to={backLinkHref}>
        <button type="button">Go back</button>
      </Link>
      <img src={posterUrl} alt={`${title} movie poster`} />
      <p>
        {title} ({releaseYear})
      </p>
      <p>User Score {userScore}%</p>
      <p>Overview</p>
      <p>{overview}</p>
      <p>Genres</p>
      <p>{genresList}</p>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
