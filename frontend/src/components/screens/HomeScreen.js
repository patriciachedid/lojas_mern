import React from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../../products'
import Product from '../Product'

const HomeScreen = () => {
    return (
      <>
        <h1>Últimos lançamentos</h1>
        {
          products.map((p) => (
              <Col>
                  <Product product={p} />           
              </Col>
          ))
        }
      </>
    );
  };
  
  export default HomeScreen;