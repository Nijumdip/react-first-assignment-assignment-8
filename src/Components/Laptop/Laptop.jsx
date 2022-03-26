import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Laptop.css'

const Laptop = ({laptop, addToCartHandler }) => {
    const { image, name, price } = laptop;
    return (
    <Col>
      <Card>
            <div className=' d-flex justify-content-center align-items-center'>
                <img variant="top" src={image} width='150px' height='150px' />      
            </div>
            <Card.Body>
                {/* <h6>Id : {} </h6> */} 
                <Card.Title>Name : {name} </Card.Title>
                <Card.Text>Price: {price} </Card.Text>
            </Card.Body>
                <div className='d-flex justify-content-center align-items-center mb-1'>
                <Button onClick={()=>addToCartHandler(laptop)} variant="outline-primary" style={{width:'180px'}}> ADD TO CART <i className="fa-solid fa-cart-plus"></i></Button>{' '}
                </div>
                
      </Card>
    </Col>

  )}

export default Laptop;