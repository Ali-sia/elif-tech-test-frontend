import { useDispatch, useSelector } from 'react-redux';
import { getShopsList } from '../../redux/shop/shopSelectors';
import { fetchShops } from 'redux/shop/shopOperations';
import { useState, useEffect } from 'react';

import { Box } from '../Box';

const ShopList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  const shops = useSelector(getShopsList);
  console.log('---> ~ ShopList ~ shops:', shops);

  if (!shops) {
    return null;
  }
  return (
    <ul>
      {shops.map(shop => {
        return (
          <li key={shop._id}>
            <input type="radio" name="shop" value={`${shop.name}`} />
            <span>{shop.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ShopList;
