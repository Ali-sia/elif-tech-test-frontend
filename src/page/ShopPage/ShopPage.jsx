import { useState } from 'react';
import { Shop } from './ShopPage.styled';

import ShopList from 'components/ShopList/ShopList';
import ShopMenu from 'components/ShopMenu/ShopMenu';

const ShopPage = () => {
  const [variant, setVariant] = useState('');

  return (
    <Shop>
      <ShopList setVariant={setVariant} />
      <ShopMenu shopId={variant} />
    </Shop>
  );
};

export default ShopPage;
