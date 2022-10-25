import { Link } from 'react-router-dom';

export default function MoviesList({ moviesData, location }) {
  return (
    <ul>
      {moviesData.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
