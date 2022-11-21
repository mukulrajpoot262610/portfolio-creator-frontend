import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BiCog, BiHome, BiUserPin } from 'react-icons/bi';
import { HiOutlinePuzzle } from 'react-icons/hi';

const Sidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <section className="col-span-1 fixed top-0 flex flex-col justify-start items-center p-4 gap-4">
      <Link href="/dashboard">
        <div
          className={`flex flex-col justify-center items-center border w-full p-4 rounded-lg hover:border-black cursor-pointer gap-1 ${
            pathname === '/dashboard' && 'border-black'
          }`}
        >
          <BiHome className="text-4xl" />
          <p className="text-xs uppercase font-bold">Home</p>
        </div>
      </Link>
      <Link href="/portfolio">
        <div
          className={`flex flex-col justify-center items-center border w-full p-4 rounded-lg hover:border-black cursor-pointer gap-1 ${
            pathname.includes('/portfolio') && 'border-black'
          }`}
        >
          <HiOutlinePuzzle className="text-4xl" />
          <p className="text-xs uppercase font-bold">Portfolio</p>
        </div>
      </Link>
      <div
        className={`flex flex-col justify-center items-center border w-full p-4 rounded-lg hover:border-black cursor-pointer gap-1 ${
          pathname === '/account' && 'border-black'
        }`}
      >
        <BiUserPin className="text-4xl" />
        <p className="text-xs uppercase font-bold">Account</p>
      </div>
      <div
        className={`flex flex-col justify-center items-center border w-full p-4 rounded-lg hover:border-black cursor-pointer gap-1 ${
          pathname === '/settings' && 'border-black'
        }`}
      >
        <BiCog className="text-4xl" />
        <p className="text-xs uppercase font-bold">Settings</p>
      </div>
    </section>
  );
};

export default Sidebar;
