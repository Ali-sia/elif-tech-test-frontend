import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartList from 'components/CartList/CartList';

const CartPage = () => {
  return (
    <div>
      <NavLink to="/">
        <button>Back</button>
      </NavLink>
      <CartList />
    </div>
  );
};

export default CartPage;
