import { useRouter } from 'next/router';
import React from 'react';

const Success = () => {
  const router = useRouter();
  const domain = router.query.domain;

  return (
    <div className="flex items-center justify-center h-screen gap-20">
      <div className="w-full p-6 lg:w-1/3 flex flex-col justify-center items-center">
        <img src="/success.svg" className="mb-8 h-80" />
        <h1 className="text-5xl font-bold mb-4 text-center">Success...</h1>

        <p className="text-lg text-gray-400 text-center mb-6">
          Your Website is ready, you can share it to the world
          <br />{' '}
          <span className="font-bold text-blue-400 cursor-pointer hover:underline">
            https://localhost:4000/{domain}
          </span>
          .
        </p>

        <div className="flex items-center justify-center mt-6 ">
          <button className="border border-blue-200 btn btn-ghost bg-blue-50 btn-wide hover:bg-blue-200">
            Visit
          </button>
        </div>
      </div>

      <div className="hidden h-full lg:w-2/3">
        <div className="relative flex justify-center h-full overflow-hidden rounded-3xl bg-blue-50">
          <h1 className="absolute font-black text-blue-200 uppercase text-8xl top-12">
            Verification
          </h1>
          <img
            alt="email"
            src="/email.png"
            className="z-20 object-cover object-top w-10/12 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
