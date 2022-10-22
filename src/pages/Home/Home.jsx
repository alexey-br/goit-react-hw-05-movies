import * as API from 'services/themoviedb-API';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    API.getTrendingMovies().then(response => console.log(response.data));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul></ul>
    </>
  );
}
