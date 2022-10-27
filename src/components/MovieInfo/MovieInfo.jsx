/** @jsxImportSource theme-ui */

import PropTypes from 'prop-types';
import { InfoTag, MovieTitle } from './MovieInfo.styled';
import { InfoText } from 'components/reusableComponents/InfoText/InfoText';

export default function MovieInfo({ movieInfo }) {
  const { posterUrl, title, releaseYear, userScore, genresList, overview } =
    movieInfo;

  return (
    <div sx={{ display: 'flex', mt: 24, mb: 24, gap: 24 }}>
      <div sx={{ minWidth: 'fit-content' }}>
        <img src={posterUrl} alt={`${title} movie poster`} />
      </div>

      <div sx={{ maxWidth: 800 }}>
        <MovieTitle>
          {title} ({releaseYear})
        </MovieTitle>
        <InfoTag>User Score {userScore}%</InfoTag>
        <InfoTag>Overview:</InfoTag>
        <InfoText>{overview}</InfoText>
        <InfoTag>Genres:</InfoTag>
        <InfoText>{genresList}</InfoText>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movieInfo: PropTypes.shape({
    posterUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    userScore: PropTypes.number.isRequired,
    genresList: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
