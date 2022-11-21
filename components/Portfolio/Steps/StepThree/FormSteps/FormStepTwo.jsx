import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setPayload } from '../../../../../redux/portfolioSlice';
import { buildWebsite } from '../../../../../services/api';
import uploadPic from '../../../../../utils/uploadPic';

const FormStepTwo = ({ setFormStep }) => {
  const dispatch = useDispatch();
  const { portfolio } = useSelector((state) => state.payload);
  const [tags, setTags] = useState(portfolio?.skills);
  const [url, setUrl] = useState(portfolio?.avatar);
  const [imageLoading, setImageLoading] = useState(false);

  const [name, setName] = useState(portfolio?.name);
  const [bio, setBio] = useState(portfolio?.bio);
  const [email, setEmail] = useState(portfolio?.email);
  const [phone, setPhone] = useState(portfolio?.phone);
  const [github, setGithub] = useState(portfolio?.github);
  const [leetcode, setLeetcode] = useState(portfolio?.leetcode);
  const [linkedin, setLinkedin] = useState(portfolio?.linkedin);
  const [twitter, setTwitter] = useState(portfolio?.twitter);
  const router = useRouter()

  const captureImage = async (e) => {
    const file = e.target.files[0];
    setImageLoading(true)
    try {
      const uploadedPic = await uploadPic(file);
      setUrl(uploadedPic);
      setImageLoading(false);
    } catch (err) {
      setImageLoading(false);
      console.log(err)
      toast.error('Error in Upload');
    }
  };

  const handleNext = () => {
    router.push(`/portfolio/success?domain=${portfolio?.domain}`)
  }

  const tagElements = tags?.map((i) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      setPayload({
        data: {
          ...portfolio,
          name,
          bio,
          avatar: url,
          email,
          phone,
          github,
          leetcode,
          linkedin,
          twitter,
          skills: tags,
        },
      })
    );

    try {
      const { data } = await buildWebsite(portfolio)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-xl">User Information</h1>

        <div className="w-full mt-8 mb-4 flex gap-12 items-center">
          <label className="flex flex-col items-center w-full p-1 border rounded-lg cursor-pointer lg:w-1/2 text-blue border-blue h-40 justify-center">
            {url && !imageLoading ? (
              <img
                src={url}
                alt="preview"
                className="rounded-lg object-cover h-32"
              />
            ) : imageLoading ? <div className='animate-pulse'>Uploading...</div> : (
              <div className="flex flex-col items-center m-4">
                <span className="text-5xl">+</span>
                <span className="text-xs">Select a file</span>
              </div>
            )}
            <input type="file" onChange={captureImage} className="hidden" />
          </label>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={bio}
              onChange={(e) => setBio(e.target.value)}
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
              value={tags?.join(',')}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">GitHub</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              maxLength={60}
              placeholder="e.g. https://github.com/"
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
            <span className="label-text">LinkedIn</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              maxLength={60}
              placeholder="e.g. https://linkedin.com/"
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
            <span className="label-text">Leetcode</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              value={leetcode}
              onChange={(e) => setLeetcode(e.target.value)}
              maxLength={60}
              placeholder="e.g. https://leetcode.com/"
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
            <span className="label-text">Twitter</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              maxLength={60}
              placeholder="e.g. https://twitter.com/"
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
        <div className="flex justify-end gap-3">
          <button className="btn btn-sm mt-4" onClick={() => setFormStep(0)}>
            Prev
          </button>
          <button className="btn btn-sm mt-4" onClick={handleNext}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default FormStepTwo;
