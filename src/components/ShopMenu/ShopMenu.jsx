import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';
import {
  MenuList,
  PhotoHolder,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  StyledButton,
  MenuItem,
} from './ShopMenu.styled';

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
    <MenuList>
      {menu.map((item, index) => {
        return (
          <MenuItem key={`${item._id}-${index}`}>
            <PhotoHolder>
              {item.photo && <img src={item.photo} alt="" />}
              photo
            </PhotoHolder>
            <ItemInfo>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemPrice>
                Price: <b>{item.price}$</b>
              </ItemPrice>
              <StyledButton type="button" onClick={() => handleAddToCart(item)}>
                BUY
              </StyledButton>
            </ItemInfo>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default ShopMenu;
