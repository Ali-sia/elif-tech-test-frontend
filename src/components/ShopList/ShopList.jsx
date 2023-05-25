import { useDispatch, useSelector } from 'react-redux';
import { getShopsList } from '../../redux/shop/shopSelectors';
import { fetchShops } from 'redux/shop/shopOperations';
import { useEffect, useState } from 'react';

const ShopList = ({ setVariant }) => {
  const dispatch = useDispatch();
  const shops = useSelector(getShopsList);
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  useEffect(() => {
    if (shops && shops.length > 0) {
      setSelectedShop(shops[0]._id);
      setVariant(shops[0]._id);
    }
  }, [shops, setVariant]);

  const handleVariantChange = event => {
    const selectedShopId = event.target.value;
    setSelectedShop(selectedShopId);
    setVariant(selectedShopId);
  };

  if (!shops) {
    return null;
  }

  return (
    <ul>
      {shops.map(shop => {
        return (
          <li key={shop._id}>
            <label>
              <input
                type="radio"
                name="shop"
                value={shop._id}
                onChange={handleVariantChange}
                checked={selectedShop === shop._id}
              />
              {shop.name}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ShopList;
