import Head from 'next/head';
import React from 'react';

const Header = () => {
  return (
    <main>
      <Head>
        <title>Creator</title>
      </Head>

      <section className="min-h-screen w-full back-grad flex justify-center items-center">
        <div className="flex justify-center items-center container mx-auto pt-16">
          <div className="w-1/2">
            <h1 className="text-white text-7xl leading-snug font-bold">
              The live audio app that pushes your voice to a new dimension
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
