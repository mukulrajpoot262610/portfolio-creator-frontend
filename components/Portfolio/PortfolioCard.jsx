import React from 'react';
import { BiPencil, BiTrash } from 'react-icons/bi';

const PortfolioCard = ({ data }) => {
  return (
    <div className="duration-200 border-2 rounded-lg bg-base-100 p-4 flex justify-between items-center">
      <figure className="flex justify-center items-center gap-6">
        <img
          src={data.image}
          className="w-40 h-20 object-cover object-top rounded-md"
        />
        <div>
          <h1 className="font-bold text-2xl hover:underline cursor-pointer">
            {data.domain}
          </h1>
          <p className="font-semibold">
            Template: <span className="font-normal">{data.template}</span>
          </p>
        </div>
      </figure>
      <div className="flex gap-4">
        <button className="btn">
          <BiPencil className="text-lg mr-1" />
          Edit Site
        </button>
        <button className="btn">
          <BiTrash className="text-lg mr-1" />
          Delete Site
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
