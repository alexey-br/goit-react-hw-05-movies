import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/themoviedb-API';

export default function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState({});

  const { id: movieId } = useParams();

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
      <img src={posterUrl} alt={`${title} movie poster`} />
      <p>
        {title} ({releaseYear})
      </p>
      <p>User Score {userScore}%</p>
      <p>Overview</p>
      <p>{overview}</p>
      <p>Genres</p>
      <p>{genresList}</p>
    </>
  );
}
