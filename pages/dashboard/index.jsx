import React from 'react';
import { BiPlus } from 'react-icons/bi';
import Sidebar from '../../components/dashboard/Sidebar';
import { ProtectedRoute } from '../../utils/ProtectedRoute';

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <section className="col-span-11 bg-gray-100 p-16 flex justify-center items-center">
          <div className="w-10/12">
            <div className="w-full">
              <h1 className="text-4xl font-bold mb-2">Dashboard!</h1>
              <div className="flex justify-between items-center my-2">
                <p className="text-gray-400 font-semibold">Continue Editing</p>
                <p className="text-gray-400 underline cursor-pointer hover:text-black text-xs">
                  View all
                </p>
              </div>
              <div className="bg-white rounded-lg h-40 mb-10 shadow-md"></div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-400">
                      4-step process to
                    </h3>
                    <h3 className="text-3xl font-semibold">
                      set up your website
                    </h3>
                  </div>
                  <button className="btn">
                    <BiPlus className="mr-1 text-xl" />
                    Get Started
                  </button>
                </div>
                <div className="flex border rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col mt-4">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 text-xl font-bold">
                    <h1>1</h1>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Choose domain name
                    </h2>
                    <p className="leading-relaxed text-base">
                      Ability to get your unique domain name with devfolio.
                    </p>
                  </div>
                </div>
                <div className="flex border rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col mt-4">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 text-xl font-bold">
                    <h1>2</h1>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Select template
                    </h2>
                    <p className="leading-relaxed text-base">
                      Browse and select your template from a wide range of
                      handcrafted and well-designed templates.
                    </p>
                  </div>
                </div>
                <div className="flex border rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col mt-4">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 text-xl font-bold">
                    <h1>3</h1>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Provide Information
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fill up the form with your contact information, expertise
                      and portfolios to showcase.
                    </p>
                  </div>
                </div>
                <div className="flex border rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col mt-4">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 text-xl font-bold">
                    <h1>4</h1>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Save and Publish
                    </h2>
                    <p className="leading-relaxed text-base">
                      That&apos;s it. Save your changes and Go Live with
                      devfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
