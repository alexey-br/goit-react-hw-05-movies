import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>Best movies</div>} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
