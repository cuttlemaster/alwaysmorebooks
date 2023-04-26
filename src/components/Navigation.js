import Link from "next/link";
import styled from "@emotion/styled";
import theme from "../styles/theme";

const NavContainer = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    margin-top: 10px;
    margin-left: 0;
    font-family: ${theme.fonts.robotoCondensed};
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    list-style-type: none;

    li {
      a { text-decoration: none; }

      span {
        color: ${theme.colors.darkGray};
        text-transform: uppercase;
        &:hover { color: ${theme.colors.lightBlue}; cursor: pointer; }
        &:current { font-weight: 700; }
      }
    }
  }
`;

const Navigation = () => (
  <NavContainer>
    <ul>
      <li>
        <Link href="/">
          <span className="current">Home</span>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link href="/recommendations">
          <span>Recommendations</span>
        </Link>
      </li>
      <li>
        <Link href="/my-rating-philosophy">
          <span>My Rating Philosophy</span>
        </Link>
      </li>
      <li>
        <Link href="/reading-history">
          <span>Reading History</span>
        </Link>
      </li>
    </ul>
  </NavContainer>
);

export default Navigation;
