import { useDispatch } from 'react-redux';

import {
  StyledCartList,
  CartItem,
  PhotoHolder,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  ItemQuantity,
  StyledButton,
} from './CartList.styled';
import { deleteFromCart } from '../../redux/cart/cartSlice';

const CartList = ({ cart }) => {
  const dispatch = useDispatch();

  const handleDeleteFromCart = item => {
    dispatch(deleteFromCart(item));
  };

  if (!cart) {
    return null;
  }
  return (
    <StyledCartList>
      {cart.map(item => {
        return (
          <CartItem key={item._id}>
            <PhotoHolder>
              {item.photo && <img src={item.photo} alt="" />}
              photo
            </PhotoHolder>
            <ItemInfo>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemPrice>
                Price: <b>{item.price}$</b>
              </ItemPrice>
              <ItemQuantity>
                Quantity: <b>{item.quantity}</b>
              </ItemQuantity>

              <StyledButton
                type="button"
                onClick={() => handleDeleteFromCart(item)}
              >
                DELETE
              </StyledButton>
            </ItemInfo>
          </CartItem>
        );
      })}
    </StyledCartList>
  );
};

export default CartList;
