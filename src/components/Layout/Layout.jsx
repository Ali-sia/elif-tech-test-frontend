import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { StyledNavLink, Header } from './Layout.styled';
import { GlobalStyle } from '../GlobalStyle';
import { Box } from '../Box';

const Layout = () => {
  return (
    <>
      <Header>
        <StyledNavLink to="/">Shop</StyledNavLink>
        <StyledNavLink to="/cart">Cart</StyledNavLink>
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
