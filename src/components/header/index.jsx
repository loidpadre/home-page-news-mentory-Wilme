import { Wrapper, Menu, Logo } from "./style";

export default function Header() {
  return (
    <Wrapper>
      <div className="container">
        <Logo>W.</Logo>
        <Menu>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li>
          </ul>
        </Menu>
      </div>
    </Wrapper>
  );
}
