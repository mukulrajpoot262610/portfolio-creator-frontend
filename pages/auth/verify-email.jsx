import Link from 'next/dist/client/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function VerifyEmailTemplate() {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = router.query;

  // useEffect(() => {
  //     if (!params?.token) return;
  //     (async () => {
  //         try {
  //             const res = await verifyEmail(params);
  //             setVerified(true);
  //         } catch (err) {
  //             setVerified(false);
  //             toast(err?.response?.data?.msg);
  //         } finally {
  //             setLoading(false);
  //         }
  //     })();
  // }, [params]);

  if (!loading && !verified) {
    return (
      <>
        <Head>
          <title>Email Not Verfied</title>
        </Head>
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
          <img src="/email.svg" className="mb-8 h-80" />
          <h1 className="text-5xl font-bold mb-8">Email NOT Verifed...</h1>

          <p className="text-2xl text-gray-400 text-center mb-6">
            We are Sorry your email is not verified. <br /> You can request
            again to verify email.
          </p>
          <button className="mt-4 border border-blue-300 btn btn-ghost hover:bg-blue-50">
            Request Email Verification
          </button>
        </div>
      </>
    );
  }

  if (!loading && verified) {
    return (
      <>
        <Head>
          <title>Email Is Verfied</title>
        </Head>
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
          <img src="/email.svg" className="mb-8 h-80" />
          <h1 className="text-5xl font-bold mb-8">Your Email is Verifed...</h1>

          <p className="text-2xl text-gray-400 text-center mb-6">
            Thanks for your patience. <br /> You can Login Now
          </p>
          <Link href="/auth">
            <button className="mt-4 border border-blue-300 btn btn-ghost hover:bg-blue-50">
              Go To Login
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <img src="/verify.svg" className="mb-8 h-80" />
      <h1 className="text-5xl font-bold mb-8">Verifying your Email...</h1>

      <p className="text-2xl text-gray-400 text-center mb-6">
        Be Patient. <br /> Do not close this window
      </p>
    </div>
  );
}
