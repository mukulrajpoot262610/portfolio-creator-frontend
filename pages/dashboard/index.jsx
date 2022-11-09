import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import { ProtectedRoute } from '../../utils/ProtectedRoute';

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-12 min-h-screen">
        <Sidebar />
        <section className="col-span-1"></section>
        <section className="col-span-11 bg-gray-100">
          <div className="w-full p-4 space-y-8 rounded-xl">
            <h1>Hello</h1>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
