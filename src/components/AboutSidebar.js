import React from 'react';
import styled from '@emotion/styled';

import theme from '../styles/theme';

import CustomIconListItem from '../components/CustomIconListItem';

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

  p {
    margin-bottom: 25px;
    &:after {
      display: block;
      margin-top: 3px;
      content: " ";
      background-color: ${theme.colors.yellow};
      height: 3px;
      width: 45%;
    }
  }

  ol {
    margin-bottom: 50px;
    padding-left: 0;
    font-family: ${theme.fonts.robotoCondensed};
    li {
      margin-bottom: 10px;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h3>Auto-Buy Authors</h3>
      <p>I don't ever have to think twice about buying the latest book from any of these writers.</p>
      <ol>
        <li>Brian McClellan</li>
        <li>Brandon Sanderson</li>
        <li>Marko Kloos</li>
        <li>Steve McHugh</li>
        <li>Martha Wells</li>
        <li>Peter V. Brett</li>
        <li>David Dalglish</li>
        <li>Hugh Howey</li>
        <li>Michael A. Stackpole</li>
        <li>Kameron Hurley</li>
        <li>Mary Robinette Kowal</li>
        <li>James S.A. Corey</li>
        <li>John Scalzi</li>
        <li>Timothy Zahn</li>
        <li>Myke Cole</li>
        <li>Nicholas Eames</li>
        <li>Andy Weir</li>
        <li>Brent Weeks</li>
        <li>Mark Lawrence</li>
        <li>Marissa Meyer</li>
        <li>Ann Leckie</li>
        <li>Pierce Brown</li>
        <li>Michael J. Martinez</li>
        <li>Django Wexler</li>
        <li>Mira Grant</li>
        <li>Brian Staveley</li>
      </ol>

    </SidebarContainer>
  );
};

export default Sidebar;
