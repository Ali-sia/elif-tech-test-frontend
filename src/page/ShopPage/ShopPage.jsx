import { useState } from 'react';

import ShopList from 'components/ShopList/ShopList';
import ShopMenu from 'components/ShopMenu/ShopMenu';

const ShopPage = () => {
  const [variant, setVariant] = useState('');

  return (
    <div>
      <ShopList setVariant={setVariant} />
      <ShopMenu shopId={variant} />
    </div>
  );
};

export default ShopPage;
