import React from 'react';
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
    list-style: none;
    padding-left: 0;

    li {
      margin-bottom: 10px;
      font-size: 18px;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h3>Bonus Articles</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
