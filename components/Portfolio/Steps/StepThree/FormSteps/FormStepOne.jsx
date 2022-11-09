import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPayload } from '../../../../../redux/portfolioSlice';

const FormStepOne = ({ setFormStep }) => {
  const { portfolio } = useSelector((state) => state.payload);
  const [heroTitle, setHeroTitle] = useState(portfolio?.heroTitle);
  const [heroContent, setHeroContent] = useState(portfolio?.heroContent);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPayload({ data: { ...portfolio, heroTitle, heroContent } }));
    setFormStep(1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-xl">Hero Section</h1>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Hero Title</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              maxLength={60}
              placeholder="Add a site title"
              className={`input input-bordered w-full`}
              value={heroTitle}
              onChange={(e) => setHeroTitle(e.target.value)}
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
            <span className="label-text">Hero Content</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Website hero content"
              className={`input input-bordered w-full`}
              maxLength={255}
              value={heroContent}
              onChange={(e) => setHeroContent(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className=""></label>
            <label className="">
              <span className="label-text-alt hover:underline cursor-pointer">
                max 255 characters
              </span>
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-sm mt-4">Next</button>
        </div>
      </form>
    </div>
  );
};

export default FormStepOne;
