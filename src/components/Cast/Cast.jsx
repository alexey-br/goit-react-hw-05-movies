import { InfoTag } from 'components/reusableComponents/InfoTag/InfoTag';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/themoviedb-API';
import { CastList } from './Cast.styled';

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
    <CastList>
      {cast.map(({ id, name, character, fotoURL }) => {
        return (
          <li key={id}>
            <img src={fotoURL} alt={`${name} foto`} />
            <p>
              <InfoTag>Name: </InfoTag>
              {name}
            </p>
            <p>
              <InfoTag>Character: </InfoTag>
              {character}
            </p>
          </li>
        );
      })}
    </CastList>
  );
}
