import Link from 'next/link';
import React from 'react';
import { BiPlus } from 'react-icons/bi';
import Sidebar from '../../components/dashboard/Sidebar';
import PortfolioCard from '../../components/Portfolio/PortfolioCard';
import { ProtectedRoute } from '../../utils/ProtectedRoute';

const PORTFOLIOS = [
  {
    id: '1',
    image: 'https://devfolio.io/static/media/template-03.1e907d27.png',
    domain: 'mukulrajpoot',
    template: 'richard hendricks',
  },
  {
    id: '2',
    image: 'https://devfolio.io/static/media/template-03.1e907d27.png',
    domain: 'mukulrajpoot',
    template: 'richard hendricks',
  },
  {
    id: '3',
    image: 'https://devfolio.io/static/media/template-03.1e907d27.png',
    domain: 'mukulrajpoot',
    template: 'richard hendricks',
  },
];

const Portfolio = () => {
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <section className="col-span-11 bg-gray-100 p-16 flex justify-center items-center">
          <div className="w-10/12">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-4xl font-bold mb-2">Portfolios!</h1>
              <Link href="/portfolio/edit">
                <button className="btn">
                  <BiPlus className="mr-1 text-xl" />
                  Create Portfolio
                </button>
              </Link>
            </div>

            <div className="w-full mt-10  flex flex-col gap-4">
              {PORTFOLIOS.map((portfolio) => (
                <PortfolioCard key={portfolio.id} data={portfolio} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
};

export default Portfolio;
