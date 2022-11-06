import React, { useState } from 'react';

const FormStepTwo = () => {
  const [tags, setTags] = useState([]);
  const tagElements = tags.map((i) => {
    return (
      <>
        {i && (
          <p
            key={i}
            className="p-1 px-2 text-sm border border-blue-500 rounded-lg bg-base-200"
          >
            {i}
          </p>
        )}
      </>
    );
  });

  return (
    <div>
      <form>
        <h1 className="font-bold text-xl">User Information</h1>

        <div className="w-full mt-8 mb-4 flex gap-12 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg">Upload Avatar</h3>
            <p className="text-sm text-gray-400">
              Upload at least 400px X 400px image
            </p>
          </div>
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              maxLength={60}
              placeholder="Write your name"
              className={`input input-bordered w-full`}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className=""></label>
            <label className="">
              <span className="label-text-alt hover:underline cursor-pointer">
                max 60 characters
              </span>
            </label>
          </div>
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Bio</span>
          </label>
          <div className="relative w-full">
            <textarea
              type="text"
              placeholder="Tell me about yourself"
              className={`textarea textarea-bordered w-full text-base`}
              maxLength={600}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className=""></label>
            <label className="">
              <span className="label-text-alt hover:underline cursor-pointer">
                max 600 characters
              </span>
            </label>
          </div>
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Skills</span>
          </label>
          <div className="flex space-x-2 mb-2">{tagElements}</div>
          <div className="relative w-full">
            <input
              type="text"
              value={tags.join(',')}
              onChange={(e) => setTags(e.target.value.split(','))}
              placeholder="Use comma (,) to add skill"
              className={`input input-bordered w-full text-base`}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className=""></label>
            <label className="">
              <span className="label-text-alt hover:underline cursor-pointer">
                max 10 skills
              </span>
            </label>
          </div>
        </div>

        <h1 className="font-bold text-xl mt-8">Contact Information</h1>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              maxLength={60}
              placeholder="e.g. john@domain.com"
              className={`input input-bordered w-full`}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className=""></label>
            <label className="">
              <span className="label-text-alt hover:underline cursor-pointer">
                max 60 characters
              </span>
            </label>
          </div>
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              maxLength={60}
              placeholder="e.g. +91 5555555555"
              className={`input input-bordered w-full`}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className=""></label>
            <label className="">
              <span className="label-text-alt hover:underline cursor-pointer">
                max 60 characters
              </span>
            </label>
          </div>
        </div>

        <h1 className="font-bold text-xl mt-8">Social Links</h1>
      </form>
    </div>
  );
};

export default FormStepTwo;
