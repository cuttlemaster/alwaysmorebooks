import Head from 'next/head'
import Image from 'next/image'
import FeaturedPost from '../components/FeaturedPost';

const samplePost = {
  title: 'Legends & Lattes',
  author: 'Travis Balderee',
  categories: ['Category 1', 'Category 2'],
  coverImage: '/images/covers/legends-and-lattes.jpg',
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
