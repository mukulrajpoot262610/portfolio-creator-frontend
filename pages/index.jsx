import Head from 'next/head';
import Header from '../components/Homepage/Header';
import Usp from '../components/Homepage/Usp';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Usp />
    </div>
  );
}
