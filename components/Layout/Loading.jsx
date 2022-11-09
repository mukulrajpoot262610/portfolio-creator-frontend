import Head from 'next/head';
import React from 'react';

const Loader = () => {
  return (
    <>
      <Head>
        <title>DEVFolio - Build your Portfolio in minutes</title>
      </Head>
      <main className="h-screen w-full bg-white flex justify-center items-center flex-col">
        <h1 className="animate-pulse text-4xl font-bold text-primary-blue">
          Loading...
        </h1>
      </main>
    </>
  );
};

export default Loader;
