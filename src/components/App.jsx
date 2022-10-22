import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/movies" element={<div>Best movies</div>} />
    </Routes>
  );
};
