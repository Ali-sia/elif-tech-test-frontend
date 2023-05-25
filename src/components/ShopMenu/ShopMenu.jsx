import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';

import { getShopMenu } from '../../redux/menu/menuSelectors';
import { fetchShopMenu } from 'redux/menu/menuOperations';

import { addToCart } from '../../redux/cart/cartSlice';
import { getCart } from '../../redux/cart/cartSelectors';

const ShopMenu = ({ shopId }) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const [showToaster, setShowToaster] = useState(false);

  useEffect(() => {
    dispatch(fetchShopMenu(shopId));
  }, [dispatch, shopId]);

  const handleAddToCart = item => {
    const isAnotherShop = cart.find(test => test.owner !== item.owner);

    if (isAnotherShop) {
      setShowToaster(true);
      return null;
    }

    dispatch(addToCart(item));
  };

  useEffect(() => {
    if (showToaster) {
      toast.error('You can order from only one shop');
      setShowToaster(false);
    }
  }, [showToaster]);

  const menu = useSelector(getShopMenu);
  if (!menu) {
    return null;
  }

  return (
    <>
      <ul>
        {menu.map((item, index) => {
          return (
            <li key={`${item._id}-${index}`}>
              <div>
                {item.photo && <img src={item.photo} alt="" />}
                photo
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>Price: {item.price}$</p>
                <button type="button" onClick={() => handleAddToCart(item)}>
                  BUY
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShopMenu;
