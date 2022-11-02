import Link from 'next/link';
import React from 'react';

export default function InvalidLink() {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h1 className="text-5xl font-bold mb-4">Oh no... a broken link!</h1>
      <p className="text-2xl text-gray-400 text-center mb-6">
        This is embarrassing.. the page you were looking for seems to
        <br /> have gone missing.
      </p>
      <Link href="/">
        <button className="btn btn-wide">Back to Home</button>
      </Link>
    </div>
  );
}
