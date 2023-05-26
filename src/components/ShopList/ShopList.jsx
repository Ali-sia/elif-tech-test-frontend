import { useDispatch, useSelector } from 'react-redux';
import { getShopsList, getShopsLoading } from '../../redux/shop/shopSelectors';
import { fetchShops } from 'redux/shop/shopOperations';
import { useEffect, useState } from 'react';

import { StyledShopList, ShopItem, ShopLabel } from './ShopList.styled';

const ShopList = ({ setVariant }) => {
  const dispatch = useDispatch();
  const shops = useSelector(getShopsList);
  const isLoading = useSelector(getShopsLoading);
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
    <StyledShopList>
      {isLoading && <h2>loading...</h2>}
      {shops.map(shop => {
        return (
          <ShopItem key={shop._id}>
            <ShopLabel>
              <input
                type="radio"
                name="shop"
                value={shop._id}
                onChange={handleVariantChange}
                checked={selectedShop === shop._id}
              />
              <span>{shop.name}</span>
            </ShopLabel>
          </ShopItem>
        );
      })}
    </StyledShopList>
  );
};

export default ShopList;
