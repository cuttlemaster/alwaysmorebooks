import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import AwardStarIcon from '../images/icons/award-star.svg';
import EditeNoteIcon from '../images/icons/edit-note.svg';
import FolderIcon from '../images/icons/folder.svg';

const StyledIconListItem = styled.li``;

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
