import { Outlet } from 'react-router-dom';
import { NavBar, Link } from './SharedLayout.styled';
import { Suspense } from 'react';

export default function SharedLayout() {
  return (
    <>
      <NavBar>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </NavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
