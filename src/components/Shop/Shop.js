import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] = useState(first10);


    const [cart, setCart] = useState([]);

    const handleAddProduct =(product)=>{
        const newcart = [...cart, product];
        setCart(newcart);
    }
    

    return (
    <div className='shop-container'>
         <div className="product-container">

          {
            products.map(pd => <Product 
                product={pd}
                handleAddProduct = {handleAddProduct}
                 />)
          }
           
        </div>

            <div className="card-container">
                <Cart cartItems= {cart} />
            </div>

        </div>
    );
};

export default Shop;