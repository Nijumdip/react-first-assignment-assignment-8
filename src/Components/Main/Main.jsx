import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';

const Main = () => {
    const [laptops, setLaptops] = useState([]);
    const [carts, setCarts]= useState([]);

    useState(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setLaptops(data));
    }, [])
    

    const addToCartHandler = (laptop) => {
        const newCarts = [...carts, laptop];
        setCarts(newCarts);
    }

    return (
        <div className='d-flex flex-row container '>
            
            <div className='me-2'>
                <Row xs={1} md={3} className="g-4">
                    {
                        laptops.map(laptop => <Laptop
                            key={laptop.id}
                            laptop={laptop}
                            addToCartHandler={addToCartHandler}
                        ></Laptop>)
                    }
                </Row>
            </div>
            <Cart cart={carts} setCarts={setCarts}></Cart> 
        </div>
            
          
    );
};

export default Main;