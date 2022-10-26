import { MenuLink, MenuList } from './AddInfoMenu.styled';

export default function AddInfoMenu() {
  return (
    <>
      <h2>Additional information:</h2>
      <MenuList>
        <li>
          <MenuLink to="cast">Cast</MenuLink>
        </li>
        <li>
          <MenuLink to="reviews">Review</MenuLink>
        </li>
      </MenuList>
    </>
  );
}
