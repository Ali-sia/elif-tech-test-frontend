import { NavLink } from 'react-router-dom';

const CartPage = () => {
  return (
    <div>
      <NavLink to="/">
        <button>Back</button>
      </NavLink>
      <h2>cart</h2>
    </div>
  );
};

export default CartPage;
