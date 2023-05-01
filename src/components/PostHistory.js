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

const PostHistory = ({ data }) => {
  const { book1, book2, book3, book4, book5 } = data;

  return (
    <PostHistoryContainer>
      <h3>Recent Reviews</h3>
      <RecentReviewTile>
        <div className="book-cover">
          <Image src={book1.cover} alt={`Cover image for ${book1.title}`} />
        </div>
        <div className="post-details">
          <h2>{book1.title}</h2>
          <div className="author">Author: {book1.author}</div>
          <div className="categories">Categories: {book1.categories.join(', ')}</div>
          <div className="date">{book1.date}</div>
        </div>
      </RecentReviewTile>

      <RecentReviewTile>
        <div className="book-cover">
          <Image src={book2.cover} alt={`Cover image for ${book2.title}`} />
        </div>
        <div className="post-details">
          <h2>{book2.title}</h2>
          <div className="author">Author: {book2.author}</div>
          <div className="categories">Categories: {book2.categories.join(', ')}</div>
          <div className="date">{book2.date}</div>
        </div>
      </RecentReviewTile>

      <RecentReviewTile>
        <div className="book-cover">
          <Image src={book3.cover} alt={`Cover image for ${book3.title}`} />
        </div>
        <div className="post-details">
          <h2>{book3.title}</h2>
          <div className="author">Author: {book3.author}</div>
          <div className="categories">Categories: {book3.categories.join(', ')}</div>
          <div className="date">{book3.date}</div>
        </div>
      </RecentReviewTile>

      <RecentReviewTile>
        <div className="book-cover">
          <Image src={book4.cover} alt={`Cover image for ${book4.title}`} />
        </div>
        <div className="post-details">
          <h2>{book4.title}</h2>
          <div className="author">Author: {book4.author}</div>
          <div className="categories">Categories: {book4.categories.join(', ')}</div>
          <div className="date">{book4.date}</div>
        </div>
      </RecentReviewTile>

      <RecentReviewTile>
        <div className="book-cover">
          <Image src={book5.cover} alt={`Cover image for ${book5.title}`} />
        </div>
        <div className="post-details">
          <h2>{book5.title}</h2>
          <div className="author">Author: {book5.author}</div>
          <div className="categories">Categories: {book5.categories.join(', ')}</div>
          <div className="date">{book5.date}</div>
        </div>
      </RecentReviewTile>
    </PostHistoryContainer>
  );
};

export default PostHistory;
