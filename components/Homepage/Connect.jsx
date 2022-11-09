import React from 'react';

const Connect = () => {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto bg-[#9B6BFF33] min-h-screen relative">
      <section className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-7xl leading-snug text-center max-w-3xl mt-20">
          It&apos;s time to find with your audience
        </h1>
        <p className="mt-2 mb-60 text-gray-400">
          Simply start your website in minutes.
        </p>
        <img src="/connect.png" className="absolute -bottom-10" />
      </section>
    </div>
  );
};

export default Connect;
