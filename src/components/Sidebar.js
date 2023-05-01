import React from 'react';
import styled from '@emotion/styled';

import theme from '../styles/theme';

const SidebarContainer = styled.aside`
  padding: 35px 25px;
  border-left: 5px solid ${theme.colors.tan};
  border-right: 5px solid ${theme.colors.tan};
  border-radius: 50px;
  width: 100%;
  max-width: 33.333%;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
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
      <h3>Sidebar Title</h3>
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
