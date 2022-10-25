import axios from 'axios';
import noPhoto from '../images/no-photo.jpg';

const KEY = 'e8f4d647cde955cba1306001955cfd97';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  api_key: KEY,
};

export const getTrendingMovies = async () => {
  return await axios.get('/trending/movie/week', {
    params: params,
  });
};

export const fetchMovies = async query => {
  const searchParams = { ...params, query: query };

  const result = await axios.get('/search/movie', {
    params: searchParams,
  });

  return result.data.results;
};

export const getMovieInfo = async id => {
  return await axios.get(`/movie/${id}`, { params: params });
};

export const getMovieCast = async id => {
  return await axios.get(`/movie/${id}/credits`, { params: params });
};

export const getMovieReviews = async id => {
  const result = await axios.get(`/movie/${id}/reviews`, { params: params });

  return result.data.results;
};

export const normalizeMoviesData = data =>
  data.map(({ id, title }) => ({ id, title }));

export const normalizeMovieInfo = movieInfo => {
  const { poster_path, title, release_date, vote_average, genres, overview } =
    movieInfo;

  const genresList = genres.map(({ name }) => name).join(', ');
  const userScore = Math.floor(vote_average * 10);
  const releaseYear = parseInt(release_date);
  const posterUrl = poster_path ? IMAGE_BASE_URL + poster_path : noPhoto;

  return {
    posterUrl,
    title,
    releaseYear,
    userScore,
    genresList,
    overview,
  };
};

export const normalizeCastData = data => {
  return data.map(({ id, name, character, profile_path }) => {
    const fotoURL = profile_path ? IMAGE_BASE_URL + profile_path : noPhoto;
    return { id, name, character, fotoURL };
  });
};

export const normalizeReviewsData = data => {
  return data.map(({ id, author, content }) => ({ id, author, content }));
};
