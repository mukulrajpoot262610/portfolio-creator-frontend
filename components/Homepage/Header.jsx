import Head from 'next/head';
import React from 'react';

const Header = () => {
  return (
    <main className="back-grad">
      <Head>
        <title>Creator</title>
      </Head>

      <section className="min-h-screen w-full  flex justify-center items-center max-w-7xl mx-auto">
        <div className="flex justify-center items-center container mx-auto pt-16 w-11/12">
          <div className="w-1/2">
            <h1 className="text-white text-5xl leading-tight font-bold">
              Create a professional-grade portfolio website within a few clicks
            </h1>
          </div>
          <div className="w-1/2">
            <img src="/hero.svg" className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Header;
