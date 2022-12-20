import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';
const CardGroup2 = () => {
    const products = [
        {name:'Laptop pro',id: 1, price: 134343},
        {name:'Laptop grow',id: 2, price: 13423},
        {name:'Laptop crow',id: 3, price: 23443}
      ]
    return (
        <div>
             {/* <h2>this is normal card group</h2> */}
            <CardGroup>
            {
                products.map(product => <Card2 
                  key={product.id}
                  product={product}
                ></Card2>)
              }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;