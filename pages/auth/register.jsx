import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/authSlice';
import { register as signup } from '../../services/api';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [toggelFieldType, setToggleFieledType] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (payload) => {
    setLoading(true);
    try {
      const { data } = await signup(payload);
      toast.success('Registration Success 🎉');
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen gap-20 w-11/12 mx-auto">
      <div className="w-full p-6 lg:w-1/3">
        <a className="flex flex-col items-center gap-2 mb-2">
          {/* <img
            alt="logo"
            src="/logo.png"
            className="object-contain w-24 h-12"
          /> */}
          <h1 className="text-3xl font-bold tracking-tight text-center uppercase cursor-pointer">
            Welcome to <span className="text-blue-500">DEV</span>Folio
          </h1>
        </a>
        <p className="mb-4 text-xs text-center">
          Join DEVFolio for Free and explore the new website experience
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`w-full input input-bordered ${
                errors.name ? 'input-error' : ''
              }`}
              {...register('name', {
                required: true,
              })}
            />
            {errors.name && (
              <label className="">
                <span className="text-red-500 label-text-alt">
                  Enter a valid name!
                </span>
              </label>
            )}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`w-full input input-bordered ${
                errors.email ? 'input-error' : ''
              }`}
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email && (
              <label className="">
                <span className="text-red-500 label-text-alt">
                  Enter a valid Email Address!
                </span>
              </label>
            )}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative w-full">
              <input
                type={toggelFieldType ? 'text' : 'password'}
                placeholder="Password"
                className={`input ${
                  errors.password ? 'input-error' : ''
                } input-bordered w-full`}
                {...register('password', {
                  required: true,
                })}
              />
              {toggelFieldType ? (
                <AiOutlineEyeInvisible
                  className="absolute text-xl cursor-pointer top-4 right-3"
                  onClick={() => setToggleFieledType(!toggelFieldType)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute text-xl cursor-pointer top-4 right-3"
                  onClick={() => setToggleFieledType(!toggelFieldType)}
                />
              )}
            </div>
            <label className="">
              {errors.password ? (
                <span className="text-red-500 label-text-alt">
                  Password is required!
                </span>
              ) : (
                <span className="label-text-alt"></span>
              )}
            </label>
          </div>
          <button
            className={`w-full mt-4 bg-blue-100 btn btn-ghost hover:bg-blue-300 ${
              loading && 'loading'
            } `}
          >
            Register{' '}
          </button>
          <p className="mt-4 text-xs text-center">
            Have an account already?
            <Link href="/auth/login">
              <span className="ml-1 text-blue-400 cursor-pointer hover:underline">
                Login Now
              </span>
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:block h-full lg:w-2/3">
        <div className="relative flex items-end justify-center h-full overflow-hidden rounded-3xl bg-blue-50">
          <h1 className="absolute font-black text-blue-200 uppercase text-9xl top-20">
            Welcome
          </h1>
          <img
            alt="welcome"
            src="/login.svg"
            className="z-20 object-cover w-2/3 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
