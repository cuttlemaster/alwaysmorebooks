import Link from "next/link";
import styled from "@emotion/styled";

const NavContainer = styled.nav``;

const Navigation = () => (
  <NavContainer>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/recommendations">Recommendations</Link>
      </li>
      <li>
        <Link href="/my-rating-philosophy">My Rating Philosophy</Link>
      </li>
      <li>
        <Link href="/reading-history">Reading History</Link>
      </li>
    </ul>
  </NavContainer>
);

export default Navigation;
