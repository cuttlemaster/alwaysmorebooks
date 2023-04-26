import Head from 'next/head'

import FeaturedPost from '../components/FeaturedPost';

import LegendsAndLattes from '../images/covers/legends-and-lattes.png';

const samplePost = {
  title: 'Legends & Lattes',
  author: 'Travis Balderee',
  categories: ['Category 1', 'Category 2'],
  coverImage: LegendsAndLattes,
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Always More Books</title>
        <meta name="description" content="A review blog about science fiction, fantasy, and other genre fiction books." />
      </Head>

      <main>
        <FeaturedPost post={samplePost} />
      </main>
    </>
  )
}
