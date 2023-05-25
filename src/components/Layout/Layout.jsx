import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from '../GlobalStyle';
import { Box } from '../Box';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </header>
      <Box pr={4} pl={4} color="text" width="400px">
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
