import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/themoviedb-API';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { id: movieId } = useParams();

  useEffect(() => {
    API.getMovieReviews(movieId)
      .then(response => setReviews(API.normalizeReviewsData(response)))
      .catch(error => console.log('get movie reviews error - ', error));
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
