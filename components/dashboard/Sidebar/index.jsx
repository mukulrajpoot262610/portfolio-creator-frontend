import React from 'react';
import { BiCog, BiHome, BiUserPin } from 'react-icons/bi';
import { HiOutlinePuzzle } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <section className="fixed top-0 flex flex-col justify-start items-center p-4 gap-4">
      <div className="flex flex-col justify-center items-center border w-full p-4 rounded-lg hover:border-black cursor-pointer gap-1">
        <BiHome className="text-4xl" />
        <p className="text-xs uppercase font-bold">Home</p>
      </div>
      <div className="flex flex-col justify-center items-center border w-full p-4 rounded-lg hover:border-black cursor-pointer gap-1">
        <HiOutlinePuzzle className="text-4xl" />
        <p className="text-xs uppercase font-bold">Portfolio</p>
      </div>
      <div className="flex flex-col justify-center items-center border w-full p-4 rounded-lg hover:border-black cursor-pointer gap-1">
        <BiUserPin className="text-4xl" />
        <p className="text-xs uppercase font-bold">Account</p>
      </div>
      <div className="flex flex-col justify-center items-center border w-full p-4 rounded-lg hover:border-black cursor-pointer gap-1">
        <BiCog className="text-4xl" />
        <p className="text-xs uppercase font-bold">Settings</p>
      </div>
    </section>
  );
};

export default Sidebar;
