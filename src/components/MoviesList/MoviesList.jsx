import { Link } from 'react-router-dom';

export default function MoviesList({ moviesData }) {
  return (
    <ul>
      {moviesData.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
