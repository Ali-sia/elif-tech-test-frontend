import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { SyledNavLink, Header } from './Layout.styled';
import { GlobalStyle } from '../GlobalStyle';
import { Box } from '../Box';

const Layout = () => {
  return (
    <>
      <Header>
        <SyledNavLink to="/">Shop</SyledNavLink>
        <SyledNavLink to="/cart">Cart</SyledNavLink>
      </Header>
      <Box padding={4} color="text" width="400px">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>

        <Toaster position="top-right" reverseOrder={true} />
        <GlobalStyle />
      </Box>
    </>
  );
};

export default Layout;
