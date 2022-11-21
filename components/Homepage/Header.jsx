import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <main className="back-grad">
      <Head>
        <title>Creator</title>
      </Head>

      <section className="min-h-screen w-full flex justify-center items-center max-w-7xl mx-auto">
        <div className="flex justify-center items-center container mx-auto pt-16 w-11/12">
          <div className="w-1/2">
            <h1 className="text-white text-5xl leading-tight font-bold">
              Create a professional-grade portfolio website within a few clicks
            </h1>
            <div className="flex justify-start gap-4 items-center mt-8">
              <Link href="/portfolio">
                <button className="btn btn-ghost border border-white text-white btn-wide">
                  Get Started Now
                </button>
              </Link>
              <h1 className="text-gray-400 hover:underline cursor-pointer hover:text-white">
                How it works?
              </h1>
            </div>
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
