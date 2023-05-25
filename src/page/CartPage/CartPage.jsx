import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { addOrder } from 'redux/order/orderOperations';
import { getCart } from '../../redux/cart/cartSelectors';
import { deleteAllCart } from 'redux/cart/cartSlice';

import CartList from 'components/CartList/CartList';

const initValues = {
  name: '',
  phone: '',
  email: '',
  address: '',
};

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  const [values, setValues] = useState(initValues);
  const handleChange = event => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  if (!cart) {
    return null;
  }
  const createOrder = async event => {
    const newOrder = {
      client: values,
      orderItems: cart,
    };

    event.preventDefault();
    await dispatch(addOrder(newOrder));
    dispatch(deleteAllCart());
    setValues(initValues);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <NavLink to="/">
        <button>Back</button>
      </NavLink>
      <form>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Edit your name"
            value={values.name}
            onChange={event => {
              handleChange(event);
            }}
          />
        </label>
        <label>
          <span>phone</span>
          <input
            type="text"
            name="phone"
            placeholder="Edit your phone"
            value={values.phone}
            onChange={event => {
              handleChange(event);
            }}
          />
        </label>
        <label>
          <span>email</span>
          <input
            type="text"
            name="email"
            placeholder="Edit your email"
            value={values.email}
            onChange={event => {
              handleChange(event);
            }}
          />
        </label>
        <label>
          <span>address</span>
          <input
            type="text"
            name="address"
            placeholder="Edit your address"
            value={values.address}
            onChange={event => {
              handleChange(event);
            }}
          />
        </label>
        <CartList cart={cart} />
        <h3>Total price: {totalPrice}$</h3>
        <button type="submit" onClick={event => createOrder(event)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CartPage;
