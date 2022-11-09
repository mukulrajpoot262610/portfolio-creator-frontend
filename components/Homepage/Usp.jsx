import React from 'react';

const Usp = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center container mx-auto">
      <section className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl leading-snug text-center max-w-3xl my-20">
          Oncie enables podcasters to offer a new experience for their
          communities through live audio
        </h1>

        <div className="flex justify-center items-center">
          <img
            src="https://devfolio.io/static/media/hero-template.e50cacd4.png"
            className="w-2/3"
          />
        </div>
      </section>
      <section className="min-h-screen flex justify-center items-center">
        <div className="flex justify-center items-center w-1/2">
          <img
            src="https://oncie.live/static/Liveroom-b4738061583f7b1f291895b2c369e4bf.png"
            className="w-1/2"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl max-w-lg font-bold mb-6 leading-normal">
            Your listeners are right there, on the other side of the mic
          </h2>
          <p className="max-w-lg leading-relaxed">
            By offering a live on Oncie, you are giving your community the
            opportunity to access exclusive content, to interact, react, ask
            questions, or even raising your voice to become an actor of their
            consumption. But above all, to feel part of a community that look
            like them and brings you together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Usp;
