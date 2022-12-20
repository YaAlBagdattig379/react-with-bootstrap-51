import React from 'react';
import './CardGroup.css' 
import Card from '../Card/Card';
const CardGroup = () => {
  const products = [
    {name:'Laptop pro',id: 1, price: 134343},
    {name:'Laptop grow',id: 2, price: 13423},
    {name:'Laptop crow',id: 3, price: 23443}
  ]
    return (
        <div className='cardGroup'>
            <h2>this is normal card group</h2>
            <div className="card-group">
              {
                products.map(product => <Card 
                  key={product.id}
                  product={product}
                ></Card>)
              }
            </div>
        </div>
    )
}

export default CardGroup;