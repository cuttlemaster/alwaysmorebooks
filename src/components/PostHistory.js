import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import theme from '../styles/theme';

const PostHistoryContainer = styled.div`
  h3 {
    margin-bottom: 25px;
    border-bottom: 3px solid ${theme.colors.darkGray};
    font-family: ${theme.fonts.robotoCondensed};
    font-size: 28px;
  }
`;

const RecentReviewTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 10px 0 5px 0px;

  .book-cover {
    flex: 1;
    max-width: 20%;
  }

  .post-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    margin-left: 25px;
    width: 100%;

    .categories {
      font-family: ${theme.fonts.robotoCondensed};
      font-size: 12px;
      font-weight: 400;
      color: ${theme.colors.tan};
      text-transform: uppercase;
    }

    h2 {
      margin-bottom: 10px;
      border-radius: 35px;
      font-size: 28px;
      line-height: 24px;
      width: fit-content;

      &:after {
        display: block;
        margin-top: 3px;
        content: " ";
        background-color: ${theme.colors.lightBlue};
        height: 3px;
        width: 65%;
      }
    }

    .author {
      font-family: ${theme.fonts.robotoCondensed};
      font-size: 16px;
      font-weight: 700;
      color: ${theme.colors.darkGray};
      text-transform: uppercase;
    }
  }
`;

const PostHistory = ({ recent }) => {
  return (
    <PostHistoryContainer>
      <h3>Recent Reviews</h3>
      <RecentReviewTile>
        <div className="book-cover">
          <Image src={recent.book1.cover} alt={`Cover image for ${recent.book1.title}`} />
        </div>
        <div className="post-details">
          <h2>{recent.book1.title}</h2>
          <div className="author">Author: {recent.book1.author}</div>
          <div className="categories">Categories: {recent.book1.categories.join(', ')}</div>
        </div>
      </RecentReviewTile>

      <RecentReviewTile>
        <div className="book-cover">
          <Image src={recent.book2.cover} alt={`Cover image for ${recent.book2.title}`} />
        </div>
        <div className="post-details">
          <h2>{recent.book2.title}</h2>
          <div className="author">Author: {recent.book2.author}</div>
          <div className="categories">Categories: {recent.book2.categories.join(', ')}</div>
        </div>
      </RecentReviewTile>

      <RecentReviewTile>
        <div className="book-cover">
          <Image src={recent.book3.cover} alt={`Cover image for ${recent.book3.title}`} />
        </div>
        <div className="post-details">
          <h2>{recent.book3.title}</h2>
          <div className="author">Author: {recent.book3.author}</div>
          <div className="categories">Categories: {recent.book3.categories.join(', ')}</div>
        </div>
      </RecentReviewTile>

      <RecentReviewTile>
        <div className="book-cover">
          <Image src={recent.book4.cover} alt={`Cover image for ${recent.book4.title}`} />
        </div>
        <div className="post-details">
          <h2>{recent.book4.title}</h2>
          <div className="author">Author: {recent.book4.author}</div>
          <div className="categories">Categories: {recent.book4.categories.join(', ')}</div>
        </div>
      </RecentReviewTile>

      <RecentReviewTile>
        <div className="book-cover">
          <Image src={recent.book5.cover} alt={`Cover image for ${recent.book5.title}`} />
        </div>
        <div className="post-details">
          <h2>{recent.book5.title}</h2>
          <div className="author">Author: {recent.book5.author}</div>
          <div className="categories">Categories: {recent.book5.categories.join(', ')}</div>
        </div>
      </RecentReviewTile>
    </PostHistoryContainer>
  );
};

export default PostHistory;
