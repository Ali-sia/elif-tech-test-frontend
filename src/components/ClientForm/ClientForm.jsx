import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { deleteFromCart } from '../../redux/cart/cartSlice';
import { getCart } from '../../redux/cart/cartSelectors';

const ClientForm = () => {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  console.log('---> ~ ClientForm ~ values:', values);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
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
        <button type="submit">Submit</button>
      </label>
    </form>
  );
};

export default ClientForm;
