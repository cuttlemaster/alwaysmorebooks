import Head from 'next/head'
import styled from '@emotion/styled';

import FeaturedPost from '../components/FeaturedPost';
import PostHistory from '../components/PostHistory';
import Sidebar from '../components/Sidebar';

import TressOfTheEmeraldSea from '../images/covers/tress-of-the-emerald-sea.png';
import LegendsAndLattes from '../images/covers/legends-and-lattes.png';
import Fallen from '../images/covers/fallen.png';
import TheWayOfKings from '../images/covers/the-way-of-kings.png';
import AFrostOfFearAndFortitude from '../images/covers/a-frost-of-fear-and-fortitude.png';
import ASeaOfSorrowAndScorn from '../images/covers/a-sea-of-sorrow-and-scorn.png';

const samplePost = {
  title: 'Tress of the Emerald Sea',
  author: 'Brandon Sanderson',
  categories: ['Fantasy', 'Adventure', 'Cosmere'],
  cover: TressOfTheEmeraldSea,
  date: 'April 28, 2023',
};

const sampleHistory = {
  book1: {
    title: 'Legends & Lattes',
    author: 'Travis Balderee',
    categories: ['Fantasy', 'Lower Stakes', 'Comfortable'],
    cover: LegendsAndLattes,
    date: 'April 24, 2023',
  },
  book2: {
    title: 'Fallen',
    author: 'Lauren Kate',
    categories: ['Fantasy', 'Urban', 'Romance'],
    cover: Fallen,
    date: 'April 14, 2023',
  },
  book3: {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    categories: ['Fantasy', 'Epic', 'Cosmere', 'The Stormlight Archive'],
    cover: TheWayOfKings,
    date: 'April 3, 2023',
  },
  book4: {
    title: 'A Frost of Fear and Fortitude',
    author: 'A.P. Beswick',
    categories: ['Fantasy', 'Reimagining', 'Folklore'],
    cover: AFrostOfFearAndFortitude,
    date: 'March 28, 2023',
  },
  book5: {
    title: 'A Sea of Sorrow and Scorn',
    author: 'A.P. Beswick',
    categories: ['Fantasy', 'Reimagining', 'Folklore'],
    cover: ASeaOfSorrowAndScorn,
    date: 'March 23, 2023',
  },
};

const HistoryAndSidebarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Always More Books</title>
        <meta name="description" content="A review blog about science fiction, fantasy, and other genre fiction books." />
      </Head>

      <FeaturedPost data={samplePost} />
      <HistoryAndSidebarContainer>
        <PostHistory data={sampleHistory} />
        <Sidebar />
      </HistoryAndSidebarContainer>
    </>
  )
}
