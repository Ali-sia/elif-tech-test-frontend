import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './Layout/Layout';

const ShopPage = lazy(() => import('../page/ShopPage/ShopPage'));
const CartPage = lazy(() => import('../page/CartPage/CartPage'));
const NotFoundPage = lazy(() => import('../page/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <BrowserRouter basename="/elif-tech-test-frontend">
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
