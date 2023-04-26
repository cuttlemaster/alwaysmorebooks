import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import theme from '../styles/theme';


const FeaturedPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  .book-cover {
    flex: 1;
    max-width: 33%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .post-details {
    flex: 2;
    margin-left: 20px;

    .categories {
      font-size: 12px;
      font-weight: 300;
      color: ${theme.colors.darkGray};
      margin-bottom: 5px;
    }

    h2 {
      font-family: ${theme.fonts.lilitaOne};
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 10px;
    }

    .author {
      font-family: ${theme.fonts.robotoCondensed};
      font-size: 16px;
      color: ${theme.colors.darkGray};
    }
  }
`;

const FeaturedPost = ({ post }) => {
  const { title, author, categories, coverImage } = post;

  return (
    <FeaturedPostContainer>
      <div className="book-cover">
        <Image src={coverImage} alt={`Cover image for ${title}`} width={200} height={300} />
      </div>
      <div className="post-details">
        <div className="categories">{categories.join(', ')}</div>
        <h2>{title}</h2>
        <div className="author">By: {author}</div>
      </div>
    </FeaturedPostContainer>
  );
};

export default FeaturedPost;
