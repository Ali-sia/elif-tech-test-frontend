import { useDispatch, useSelector } from 'react-redux';
import { getShopsList } from '../../redux/shop/shopSelectors';
import { fetchShops } from 'redux/shop/shopOperations';
import { useState, useEffect } from 'react';

import { Box } from '../Box';

const ShopList = ({ setVariant }) => {
  const dispatch = useDispatch();

  //   console.log('---> ~ ShopList ~ variant:', variant);

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  const shops = useSelector(getShopsList);

  const handleVariantChange = event => {
    setVariant(event.target.value);
  };

  if (!shops) {
    return null;
  }
  return (
    <ul>
      {shops.map(shop => {
        return (
          <li key={shop._id}>
            <label>
              <input
                type="radio"
                name="shop"
                value={`${shop._id}`}
                onClick={handleVariantChange}
              />
              {shop.name}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ShopList;
