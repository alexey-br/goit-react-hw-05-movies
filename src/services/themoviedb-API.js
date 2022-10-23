import axios from 'axios';

const KEY = 'e8f4d647cde955cba1306001955cfd97';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const params = {
    api_key: KEY,
  };

  return await axios.get('/trending/movie/week', {
    params: params,
  });
};

export const getMovieInfo = async id => {
  const params = {
    api_key: KEY,
  };

  return await axios.get(`/movie/${id}`, { params: params });
};

export const normalizeMoviesData = data =>
  data.map(({ id, title }) => ({ id, title }));

export const normalizeMovieInfo = movieInfo => {
  const { poster_path, title, release_date, vote_average, genres, overview } =
    movieInfo;

  const genresList = genres.map(({ name }) => name).join(', ');
  const userScore = Math.floor(vote_average * 10);
  const releaseYear = parseInt(release_date);
  const posterUrl = IMAGE_BASE_URL + poster_path;

  return {
    posterUrl,
    title,
    releaseYear,
    userScore,
    genresList,
    overview,
  };
};
