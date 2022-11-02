import Link from 'next/link';
import React from 'react';

const VerifyEmail = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-20">
      <div className="w-full p-6 lg:w-1/3 flex flex-col justify-center items-center">
        <img src="/email.svg" className="mb-8 h-80" />
        <h1 className="text-5xl font-bold mb-4 text-center">
          Check Your Mail...
        </h1>

        <p className="text-lg text-gray-400 text-center mb-6">
          If you have not received the verification link please check your
          &apos;Spam&apos; or &apos;Junk&apos; folder. Still don&apos;t see it?{' '}
          <br />{' '}
          <span className="font-bold text-blue-400 cursor-pointer hover:underline">
            Resend the verification link
          </span>
          .
        </p>

        <p className="text-center text-gray-400">
          Wrong email address?{' '}
          <span className="font-bold text-blue-400 cursor-pointer hover:underline">
            Change email{' '}
          </span>
        </p>

        <div className="flex items-center justify-center mt-6 ">
          <Link href="/auth/login">
            <button className="border border-blue-200 btn btn-ghost bg-blue-50 btn-wide hover:bg-blue-200">
              Go To Login
            </button>
          </Link>
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

export default VerifyEmail;
