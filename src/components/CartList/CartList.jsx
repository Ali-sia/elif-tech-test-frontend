import { useDispatch } from 'react-redux';

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
              <p>Quantity: {item.quantity}</p>

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
