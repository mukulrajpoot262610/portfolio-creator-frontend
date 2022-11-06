import Head from 'next/head';
import Header from '../components/Homepage/Header';
import Usp from '../components/Homepage/Usp';
import Navbar from '../components/Layout/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />
      <Usp />
    </div>
  );
}
