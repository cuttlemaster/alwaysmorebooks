import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import theme from '../styles/theme';


const FeaturedPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 25px 0 25px 25px;
  background-color: ${theme.colors.featuredBg};

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
    margin-left: 25px;

    .categories {
      margin-top: 25px;
      margin-bottom: 5px;
      font-family: ${theme.fonts.robotoCondensed};
      font-size: 14px;
      font-weight: 400;
      color: ${theme.colors.darkGray};
      text-transform: uppercase;
    }

    h2 {
      margin-bottom: 5px;
      padding: 25px;
      background-color: ${theme.colors.yellow};
      font-weight: 700;
    }

    .author {
      font-family: ${theme.fonts.robotoCondensed};
      font-size: 24px;
      font-weight: 700;
      color: ${theme.colors.darkGray};
      text-transform: uppercase;
    }

    .date {
      color: ${theme.colors.darkGray};
      font-family: ${theme.fonts.robotoCondensed};
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
`;

const FeaturedPost = ({ data }) => {
  const { title, author, categories, cover, date } = data;

  return (
    <FeaturedPostContainer>
      <div className="book-cover">
        <Image src={cover} alt={`Cover image for ${title}`} />
      </div>
      <div className="post-details">
        <div className="categories">Categories: {categories.join(', ')}</div>
        <h2>{title}</h2>
        <div className="author">Author: {author}</div>
        <div className="date">{date}</div>
      </div>
    </FeaturedPostContainer>
  );
};

export default FeaturedPost;
