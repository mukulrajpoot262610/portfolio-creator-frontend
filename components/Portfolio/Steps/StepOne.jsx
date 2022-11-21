import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setPayload } from '../../../redux/portfolioSlice';
import { checkDomain } from '../../../services/api';

const StepOne = ({ setActive }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await checkDomain(data);
      dispatch(setPayload({ data }));
      setActive(1);
    } catch (err) {
      toast.error(err?.response?.data?.msg);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-start justify-center">
      <h1 className="text-5xl font-bold mb-2">Create Portfolio!</h1>
      <p className="text-2xl text-gray-400 text-center mb-6">
        Choose your domain
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <p className="text-4xl font-bold text-accent text-center">
            https://devfolio.io/
          </p>
          <input
            className={`w-full input text-4xl font-bold text-accent input-bordered ${
              errors.email ? 'input-error' : ''
            }`}
            placeholder="domain"
            {...register('domain', {
              required: true,
            })}
          />
        </div>
        {errors.domain ? (
          <label className="label">
            <span className="text-lg text-red-500">
              Domain must be in between 5 - 30 characters
            </span>
          </label>
        ) : (
          <p className="text-lg text-gray-400 mt-2">
            In between 5 - 30 characters
          </p>
        )}
        <button type="submit" className="btn btn-wide mt-6">
          Next
        </button>
      </form>
    </div>
  );
};

export default StepOne;
