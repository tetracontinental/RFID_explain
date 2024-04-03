import Head from 'next/head';
import Layout from '../components/Layout';
import BookInfo from '../components/BookInfo';
import ReviewCard from '../components/ReviewCard';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>RFID Book Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BookInfo />
        <ReviewCard />
        <Reviews />
      </main>
    </Layout>
  );
}