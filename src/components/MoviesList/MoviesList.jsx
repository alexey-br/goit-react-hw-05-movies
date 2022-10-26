/** @jsxImportSource theme-ui */
import { ListItem, MovieLink } from './MoviesList.styled';

export default function MoviesList({ moviesData, location }) {
  return (
    <ul sx={{ mt: 3 }}>
      {moviesData.map(({ id, title }) => (
        <ListItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </ListItem>
      ))}
    </ul>
  );
}
