import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import Rating from '../components/Ratings';
import products from '../products'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <>
      <Link className='btn btn-light my-3' to='/'> Voltar</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} avaliações`}/>
            </ListGroup.Item>
            <ListGroup.Item>Preço: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Descrição: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Preço: </Col>
                  <Col><strong>${product.price}</strong></Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>{product.countInStock > 0 ? 'Disponível' : 'Não disponível'}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                  Adicionar no carrinho
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen;