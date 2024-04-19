import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
    const productMap =products.map((product)=>{
        return <Product product={product} />
    })
  return (
    <>
     <h1>Latest Products</h1>
     <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
        {productMap}
        </Col>
     </Row>
    </>
  )
}

export default HomeScreen