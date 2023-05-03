import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import theme from '../styles/theme';

import AwardStarIcon from '../images/icons/award-star.svg';
import EditNoteIcon from '../images/icons/edit-note.svg';
import FolderIcon from '../images/icons/folder.svg';

const StyledIconListItem = styled.li`
  list-style-type: none;
  padding-left: 30px;
  background-repeat: no-repeat;
  background-position: left center;
  margin-bottom: 25px;

  &:award-star-icon { background-image: url(${AwardStarIcon}); }
  &:edit-note-icon { background-image: url(${EditNoteIcon}); }
  &:folder-icon { background-image: url(${FolderIcon}); }

  a {
    color: ${theme.colors.darkGray};
    font-family: ${theme.fonts.robotoCondensed};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.tan};
      text-decoration: underline;
    }
  }
`;

const CustomIconListItem = ({ icon, href, children }) => {
  let iconClass = '';

  switch (icon) {
    case 'AwardStarIcon':
      iconClass = 'award-star-icon';
      break;
    case 'EditNoteIcon':
      iconClass = 'edit-note-icon';
      break;
    case 'FolderIcon':
      iconClass = 'folder-icon';
      break;
    default:
      break;
  }

  return (
    <StyledIconListItem className={iconClass}>
      <Link href={href}>
        {children}
      </Link>
    </StyledIconListItem>
  );
};

export default CustomIconListItem;
