import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import theme from '../styles/theme';

const SidebarContainer = styled.aside`
  position: relative;
  padding-left: 35px;
  border-left: 3px solid ${theme.colors.featuredBg};
  width: 100%;
  max-width: 33.333%;

  h3 {
    margin-bottom: 25px;
    border-bottom: 3px solid ${theme.colors.darkGray};
    font-family: ${theme.fonts.robotoCondensed};
    font-size: 28px;
  }

  ul {
    padding-left: 0;

    li {
      margin-bottom: 25px;

      a {
        color: ${theme.colors.darkGray};
        font-family: ${theme.fonts.robotoCondensed};
        text-decoration: none;

        &:hover {
          color: ${theme.colors.tan};
          text-decoration: underline;
        }
      }
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h3>Bonus Articles</h3>
      <ul>
        <li><Link href="/what-i-read-in-march-2023">What I Read in March 2023</Link></li>
        <li><Link href="">How Many Times Have You Read Your Favorite Book?</Link></li>
        <li><Link href="">Which Anti-Hero Do You Love?</Link></li>
        <li><Link href="">How I Feel About the Wheel of Time TV Show</Link></li>
        <li><Link href="">Kindle, Print, Audiobook: How Do You Read?</Link></li>
        <li><Link href="">My Constant Battle with Genre Fiction Hating Standalones</Link></li>
        <li><Link href="">Best Science Fiction Books I Read in 2022</Link></li>
        <li><Link href="">New TBR Additions: Lady Astronauts & Devil Dinosaurs</Link></li>
        <li><Link href="">You'll Never Read Everything: I Promise It's Okay</Link></li>
        <li><Link href="">How Many Books Are On Your TBR?</Link></li>
        <li><Link href="">What I Read in February 2023</Link></li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
