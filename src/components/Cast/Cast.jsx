import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/themoviedb-API';

export default function Cast() {
  const [cast, setCast] = useState([]);

  const { id: movieId } = useParams();

  useEffect(() => {
    API.getMovieCast(movieId)
      .then(response => response.data.cast)
      .then(data => setCast(API.normalizeCastData(data)))
      .catch(error => console.log('get movie cast error - ', error));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, character, fotoURL }) => {
        return (
          <li key={id}>
            <img src={fotoURL} alt={`${name} foto`} />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
