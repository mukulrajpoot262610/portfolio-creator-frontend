import React from 'react';
import { FaUsers } from 'react-icons/fa';

const TemplateCard = ({ data, setSelected, selected }) => {
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  }

  return (
    <div
      onClick={() => setSelected(data.id)}
      className={`max-w-sm duration-200 border-2 ${
        data.id === selected && 'border-black'
      } cursor-pointer hover:shadow-lg card bg-base-100`}
    >
      <figure className="aspect-w-2 aspect-h-1">
        <img src={data?.image} alt="thumbnail" className="object-cover" />
      </figure>
      <div className="p-4 card-body">
        <h2 className="text-lg font-semibold leading-tight tracking-tight capitalize card-title hover:underline">
          {truncateString(data?.name, 50)}
        </h2>
        <p className="text-xs font-light text-gray-400">
          {truncateString(data?.desc, 100)}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaUsers className="text-xl" />
            <p className="flex items-center gap-1 font-semibold">
              {data?.students?.length || 0}
              <span className="text-sm font-normal">Users</span>
            </p>
          </div>
          <div
            onClick={() => setSelected(data.id)}
            className="text-xs border border-blue-200 btn btn-sm btn-ghost hover:bg-blue-50"
          >
            Select Template
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
