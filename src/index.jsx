import React from 'react';
import {
  useExtensionApi,
  render,
  Banner,
  useTranslate,
  useAppMetafields,
  Link
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const {extensionPoint} = useExtensionApi();
  const translate = useTranslate();

  const metafieldNamespace = "custom";
  const metafieldKey = "variantid";

  
  const metafields = useAppMetafields();
  console.log(metafields);
  let variantID = metafields[0]?.metafield.value ;

  if (variantID) {
  return (
      <Link external="false" to={`https://markusvoigt.myshopify.com/cart/${variantID}:1`}>
      Click here to order for another country
    </Link>
  );
  }else{
    return <></>
  }
}