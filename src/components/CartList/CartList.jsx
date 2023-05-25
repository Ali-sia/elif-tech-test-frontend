import { useDispatch, useSelector } from 'react-redux';

import { deleteFromCart } from '../../redux/cart/cartSlice';
import { getCart } from '../../redux/cart/cartSelectors';

const CartList = ({ setVariant }) => {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  const handleDeleteFromCart = item => {
    dispatch(deleteFromCart(item));
  };

  if (!cart) {
    return null;
  }
  return (
    <ul>
      {cart.map(item => {
        return (
          <li key={item._id}>
            <div>
              {item.photo && <img src={item.photo} alt="" />}
              photo
            </div>
            <div>
              <h3>{item.name}</h3>
              <p>Price: {item.price}$</p>

              <button type="button" onClick={() => handleDeleteFromCart(item)}>
                DELETE
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartList;
