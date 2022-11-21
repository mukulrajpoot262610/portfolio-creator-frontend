import Head from 'next/head';
import Connect from '../components/Homepage/Connect';
import EmailList from '../components/Homepage/EmailList';
import Header from '../components/Homepage/Header';
import Usp from '../components/Homepage/Usp';
import Footer from '../components/Layout/Footer';
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
      <Connect />
      <EmailList />
      <Footer />
    </div>
  );
}
