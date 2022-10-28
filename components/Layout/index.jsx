import { useRouter } from 'next/router';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div>
      {path.includes('/auth') ? '' : <Navbar />}
      <main>{children}</main>
      {path.includes('/auth') ? '' : <Footer />}
    </div>
  );
};

export default Layout;
