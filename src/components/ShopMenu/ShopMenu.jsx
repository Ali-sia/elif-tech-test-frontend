import {
  useEffect,
  // , useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getShopMenu } from '../../redux/menu/menuSelectors';
import { fetchShopMenu } from 'redux/menu/menuOperations';

import { addToCart } from '../../redux/cart/cartSlice';
import { getCart } from '../../redux/cart/cartSelectors';

const ShopMenu = ({ shopId }) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  // const [isOneShop, setIsOneShop] = useState(true);

  useEffect(() => {
    dispatch(fetchShopMenu(shopId));
  }, [dispatch, shopId]);

  const menu = useSelector(getShopMenu);
  if (!menu) {
    return null;
  }

  const handleAddToCart = item => {
    const isAnotherShop = cart.find(test => test.owner !== item.owner);

    if (isAnotherShop) {
      // setIsOneShop(false);
      return null;
    }

    dispatch(addToCart(item));
  };

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
