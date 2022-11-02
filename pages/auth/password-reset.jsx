import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

const ResetPassowrd = () => {
  const router = useRouter();
  const params = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { password, confirmPassword } = data;
    console.log(data);
    // try {
    //     if (password !== confirmPassword) {
    //         return toast("passwords do not match");
    //     }
    //     data = { ...data, ...params };
    //     const res = await resetPassword(data);
    //     toast(res?.data?.msg);
    //     router.push("/auth");
    // } catch (err) {
    //     toast(err?.response?.data?.msg);
    // }
  };

  // // ONLOAD: check if link is valid
  // useEffect(() => {
  //     if (!params?.token) return;
  //     (async () => {
  //         try {
  //             await verifyMagicToken(params);
  //         } catch (err) {
  //             router.push("/auth/invalid-link");
  //         }
  //     })();
  // }, [params]);

  // useEffect(() => {
  //     if (isAuth) {
  //         router.push("/");
  //     }
  // }, [isAuth]);

  return (
    <div className="flex items-center justify-center min-h-screen gap-20 w-11/12 mx-auto">
      <div className="w-full p-6 lg:w-1/3">
        <a className="flex flex-col items-center gap-2">
          <img
            alt="metrack-logo"
            src="/logo.png"
            className="object-contain w-24 h-12"
          />
          <h1 className="text-3xl font-bold tracking-tight text-center uppercase cursor-pointer">
            Reset PAssword
          </h1>
        </a>
        <p className="mb-6 text-xs text-center">
          Make a new password for your 100Tube account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mt-2 form-control">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="text"
              {...register('password', { required: true })}
              placeholder="Type here"
              className={`w-full input input-bordered ${
                errors.password ? 'input-error' : ''
              }`}
            />
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
          <div className="w-full mt-2 form-control">
            <label className="">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              {...register('confirmPassword', { required: true })}
              placeholder="Type here"
              className={`w-full input input-bordered ${
                errors.password ? 'input-error' : ''
              }`}
            />
            <label className="label">
              {errors.password ? (
                <span className="text-red-500 label-text-alt">
                  Passwords should match
                </span>
              ) : (
                <span className="label-text-alt"></span>
              )}
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-100 btn btn-ghost hover:bg-blue-300"
          >
            Reset Password
          </button>
        </form>
      </div>
      <div className="hidden lg:block h-full lg:w-2/3">
        <div className="relative flex items-center justify-center h-full overflow-hidden rounded-3xl bg-blue-50">
          <h1 className="absolute z-10 font-black text-blue-200 uppercase text-9xl top-16">
            RESET <br />
            Password
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

export default ResetPassowrd;
