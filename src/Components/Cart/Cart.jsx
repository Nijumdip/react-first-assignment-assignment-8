import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Cart = ({ cart, setCarts }) => {
    const [randomProduct, setRandomProduct] = useState({});
    const fourProduct = cart.slice(0, 4);
    
    const randomHandler = () => {
        const randomProduct = fourProduct[Math.floor(Math.random() * fourProduct.length)];
        setRandomProduct(randomProduct);  
    }
    const removeProduct = () => {
        setCarts([]);
        setRandomProduct({});
    }
    return (
        <div>
            <Card className='summary-card' style={{ width: '18rem' }}>
                <h3>Product Summary : </h3>
                <hr/>
            <Card.Body>
                {
                        fourProduct.map(singleProduct => <h5
                            key={singleProduct.id}
                        >{singleProduct.name}</h5>)   
                } 
                    <Button onClick={randomHandler} variant="primary" className='mb-1' >CHOOSE 1 FOR ME</Button>
                    <h5 className='text-danger'>{ randomProduct.name}</h5>
                <br />
                <Button onClick={removeProduct} variant="danger">REMOVE</Button>
            </Card.Body>
    </Card>
        </div>
    );
};

export default Cart;