import { useState, useEffect } from 'react';

import ShopList from 'components/ShopList/ShopList';

const ShopPage = () => {
  const [variant, setVariant] = useState('');
  console.log('---> ~ ShopPage ~ variant:', variant);

  return (
    <div>
      <h1>Welcome to page :)</h1>
      <p>I am very glad to see you on our page🤗</p>
      <p>Thank you for visiting)</p>
      <p>On the tweets tab you will see possible subscriptions.</p>
      <p>
        Also, when you follow someone, you will see it. For convenience, there
        is a filter by subscriptions.
      </p>

      <ShopList setVariant={setVariant} />
    </div>
  );
};

export default ShopPage;
