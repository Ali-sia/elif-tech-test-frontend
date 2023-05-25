import { useDispatch, useSelector } from 'react-redux';
import { getShopMenu } from '../../redux/menu/menuSelectors';
import { fetchShopMenu } from 'redux/menu/menuOperations';
import { useState, useEffect } from 'react';

import { Box } from '../Box';

const ShopMenu = ({ shopId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShopMenu(shopId));
  }, [dispatch, shopId]);

  const menu = useSelector(getShopMenu);

  if (!menu) {
    return null;
  }
  return (
    <ul>
      {menu.map(item => {
        return (
          <li key={item._id}>
            <div>
              {item.photo && <img src={item.photo} alt="" />}
              photo
            </div>
            <div>
              <h3>{item.name}</h3>
              <p>Price: {item.price}$</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ShopMenu;
