import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { addOrder } from 'redux/order/orderOperations';
import { getCart } from '../../redux/cart/cartSelectors';
import { deleteAllCart } from 'redux/cart/cartSlice';

import toast from 'react-hot-toast';

import CartList from 'components/CartList/CartList';
import {
  Form,
  InnerForm,
  TotalPrice,
  StyledButton,
  Label,
  Input,
  InputName,
  SummaryContainer,
} from './CartPage.styled';

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
    toast.success('Your order on road');
    dispatch(deleteAllCart());
    setValues(initValues);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <InnerForm>
        <Form>
          <Label>
            <InputName>Name</InputName>
            <Input
              type="text"
              name="name"
              placeholder="Edit your name"
              value={values.name}
              required
              onChange={event => {
                handleChange(event);
              }}
            />
          </Label>
          <Label>
            <InputName>Phone</InputName>
            <Input
              type="text"
              name="phone"
              placeholder="Edit your phone"
              value={values.phone}
              required
              onChange={event => {
                handleChange(event);
              }}
            />
          </Label>
          <Label>
            <InputName>Email</InputName>
            <Input
              type="text"
              name="email"
              placeholder="Edit your email"
              value={values.email}
              onChange={event => {
                handleChange(event);
              }}
            />
          </Label>
          <Label>
            <InputName>Address</InputName>
            <Input
              type="text"
              name="address"
              required
              placeholder="Edit your address"
              value={values.address}
              onChange={event => {
                handleChange(event);
              }}
            />
          </Label>
        </Form>
        <div>
          <CartList cart={cart} />
        </div>
      </InnerForm>
      <SummaryContainer>
        <TotalPrice>Total price: {totalPrice}$</TotalPrice>
        <StyledButton type="submit" onClick={event => createOrder(event)}>
          Create order
        </StyledButton>
      </SummaryContainer>
    </div>
  );
};

export default CartPage;
