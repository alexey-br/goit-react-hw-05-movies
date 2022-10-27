/** @jsxImportSource theme-ui */
import { InfoTag } from 'components/reusableComponents/InfoTag/InfoTag';
import { InfoText } from 'components/reusableComponents/InfoText/InfoText';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/themoviedb-API';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { id: movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    API.getMovieReviews(movieId, controller)
      .then(setReviews)
      .catch(error => console.log('get movie reviews error - ', error));

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ul sx={{ maxWidth: 1200 }}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p sx={{ mb: 2 }}>
                  <InfoTag>Author: </InfoTag> {author}
                </p>
                <InfoText>{content}</InfoText>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
