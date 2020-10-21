import React from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
      <h1 className='mt'>Últimos lançamentos</h1>
      <Row>
        {
            products.map((p) => (
                <Col lg="4">
                    <Product product={p} />
                </Col>
            ))
        }
      </Row>
    </>
  );
};
  
  export default HomeScreen;