import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import Header from '../Header';
import Footer from '../Footer';
import SubNav from '../SubNav';
import ScrollToTop from '../ScrollToTop';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: 9 }}>
        <ScrollToTop />
        <SubNav />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
