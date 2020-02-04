import React from 'react';
import { ProductsServiceConsumer } from '../products-service-context';

const withProductStoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <ProductsServiceConsumer>
        {
          (bookstoreService) => {
            return (<Wrapped {...props}
                     bookstoreService={bookstoreService}/>);
          }
        }
      </ProductsServiceConsumer>
    );
  }
};

export default withProductStoreService;
