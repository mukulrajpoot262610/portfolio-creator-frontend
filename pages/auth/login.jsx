import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { setAuth } from "redux/authSlice";
// import { login } from "services/api";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [toggelFieldType, setToggleFieledType] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    // try {
    //     const res = await login(data);
    //     dispatch(setAuth(res.data));
    //     router.push("/dashboard");
    //     setLoading(false);
    // } catch (err) {
    //     // console.log(err);
    //     setLoading(false);
    //     toast.error(err?.response?.data?.msg || err?.message);
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen gap-20 w-11/12 mx-auto">
      <div className="w-full p-6 lg:w-1/3">
        <a className="flex flex-col items-center gap-2 mb-6">
          <img
            alt="Logo"
            src="/logo.png"
            className="object-contain w-24 h-12"
          />
          <h1 className="text-3xl font-bold tracking-tight text-center uppercase cursor-pointer">
            Welcome Back to <span className="text-blue-500">ME</span>Track
          </h1>
        </a>

        <form onSubmit={handleSubmit(onSubmit)}>
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
              <label className="label">
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
            className={`w-full mt-6 ${
              loading && 'loading'
            } bg-blue-100 btn btn-ghost hover:bg-blue-300`}
          >
            Log In{' '}
          </button>
          <p className="mt-4 text-xs text-center">
            Don’t have an account?
            <Link href="/auth/register">
              <span
                className={`ml-1 text-blue-400 cursor-pointer hover:underline`}
              >
                Register Now
              </span>
            </Link>
          </p>
        </form>
      </div>
      <div className="h-full lg:w-2/3">
        <div className="relative flex items-center justify-center h-full overflow-hidden rounded-3xl bg-blue-50">
          <h1 className="absolute z-10 font-black text-blue-200 uppercase text-9xl top-16">
            Login
          </h1>
          <img
            alt="login"
            src="/login.svg"
            className="z-20 object-cover w-2/3 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
