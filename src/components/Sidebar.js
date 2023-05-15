import React from 'react';
import Link from 'next/link';
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

  ul {
    margin-bottom: 50px;
    padding-left: 0;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h3>Recent Articles</h3>
      <ul>
        <CustomIconListItem icon="EditNoteIcon" href="/what-i-read-in-march-2023">What I Read in March 2023</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">How Many Times Have You Read Your Favorite Book?</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">Which Anti-Hero Do You Love?</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">How I Feel About the Wheel of Time TV Show</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">Kindle, Print, Audiobook: How Do You Read?</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">My Constant Battle with Genre Fiction Hating Standalones</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">Best Science Fiction Books I Read in 2022</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">New TBR Additions: Lady Astronauts & Devil Dinosaurs</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">You'll Never Read Everything: I Promise It's Okay</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">How Many Books Are On Your TBR?</CustomIconListItem>
        <CustomIconListItem icon="EditNoteIcon" href="">What I Read in February 2023</CustomIconListItem>
      </ul>

      <h3>SF & Fantasy Award Lists</h3>
      <ul>
        <CustomIconListItem icon="AwardStarIcon" href="">Hugo Award for Best Novel</CustomIconListItem>
        <CustomIconListItem icon="AwardStarIcon" href="">Nebula Award for Best Novel</CustomIconListItem>
        <CustomIconListItem icon="AwardStarIcon" href="">Locus Award for Best SF Novel</CustomIconListItem>
        <CustomIconListItem icon="AwardStarIcon" href="">Locus Award for Best Fantasy Novel</CustomIconListItem>
      </ul>

      <h3>Categories</h3>
      <ul>
        <CustomIconListItem icon="FolderIcon" href="">Fantasy</CustomIconListItem>
        <CustomIconListItem icon="FolderIcon" href="">Urban</CustomIconListItem>
        <CustomIconListItem icon="FolderIcon" href="">Lower Stakes</CustomIconListItem>
        <CustomIconListItem icon="FolderIcon" href="">Comfortable</CustomIconListItem>
        <CustomIconListItem icon="FolderIcon" href="">Romance</CustomIconListItem>
        <CustomIconListItem icon="FolderIcon" href="">Cosmere</CustomIconListItem>
        <CustomIconListItem icon="FolderIcon" href="">The Stormlight Archive</CustomIconListItem>
        <CustomIconListItem icon="FolderIcon" href="">Epic</CustomIconListItem>
        <CustomIconListItem icon="FolderIcon" href="">Reimagining</CustomIconListItem>
        <CustomIconListItem icon="FolderIcon" href="">Folklore</CustomIconListItem>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
