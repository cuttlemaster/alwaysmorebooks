import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import theme from '../styles/theme';

const PostHistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 5px 10px;
  border-radius: 25px;
  max-width: 66%;

  .book-cover {
    flex: 1;
    max-width: 20%;

    img { border-radius: 15px; }
  }

  .post-details {
    flex: 2;
    margin-left: 25px;

    .categories {
      margin-top: 25px;
      margin-bottom: 5px;
      font-family: ${theme.fonts.robotoCondensed};
      font-size: 12px;
      font-weight: 400;
      color: ${theme.colors.darkGray};
      text-transform: uppercase;
    }

    h2 {
      margin-bottom: 5px;
      padding: 15px 0 12px 15px;
      border-top: 3px solid ${theme.colors.lightBlue};
      border-bottom: 3px solid ${theme.colors.lightBlue};
      border-left: 3px solid ${theme.colors.lightBlue};
      border-bottom-left-radius: 35px;
      font-size: 24px;
      line-height: 24px;
    }

    .author {
      margin-left: 35px;
      font-family: ${theme.fonts.robotoCondensed};
      font-size: 16px;
      font-weight: 700;
      color: ${theme.colors.darkGray};
    }
  }
`;

const PostHistory = ({ recent }) => {
  return (
    <PostHistoryContainer>
      <div className="book-cover">
        <Image src={recent.book1.cover} alt={`Cover image for ${recent.book1.title}`} />
      </div>
       <div className="post-details">
        <div className="categories">Categories: {recent.book1.categories.join(', ')}</div>
        <h2>{recent.book1.title}</h2>
        <div className="author">Author: {recent.book1.author}</div>
      </div>
    </PostHistoryContainer>
  );
};

export default PostHistory;
