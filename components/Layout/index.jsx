import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoadingWithRefresh } from '../../hooks/useLoadingWithRefresh';
import Loader from './Loading';

const Layout = ({ children }) => {
  const { loading } = useLoadingWithRefresh();

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Toaster />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
