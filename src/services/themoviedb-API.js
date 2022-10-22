import axios from 'axios';

const KEY = 'e8f4d647cde955cba1306001955cfd97';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const params = {
    api_key: KEY,
  };

  //   try {
  //     const response = await axios.get('/trending/movie/week', {
  //       params: params,
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }

  const response = await axios.get('/trending/movie/week', {
    params: params,
  });

  return response;
};
