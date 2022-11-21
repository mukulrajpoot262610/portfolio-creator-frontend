import React from 'react';

const EmailList = () => {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto min-h-screen relative">
      <section className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-6xl leading-snug text-center max-w-3xl mt-20">
          Would you like to get exclusive early access ?
        </h1>
        <p className="mt-4 text-gray-400">
          Enter your email and be amongst the firsts to discover Oncie before
          the official release.
        </p>
        <div className="mt-16 flex justify-center items-center gap-4 w-9/12">
          <input
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
          <button className="btn shadow-xl">Get Early Access</button>
        </div>
      </section>
    </div>
  );
};

export default EmailList;
