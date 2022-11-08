import React from 'react';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div>
      <Toaster />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
