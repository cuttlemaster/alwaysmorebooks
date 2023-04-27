import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import theme from '../styles/theme';

const PostHistoryContainer = styled.div`
  border: 1px solid ${theme.colors.red};

  h2 {
    font-size: 24px;
    line-height: 28px;
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
