import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);

    const { img, name, seller, price, stock } = props.product

    // console.log(props.product.name);

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-name'>
                <h4>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock- order soon </small></p>
                <button
                 className='btn' 
                 onClick={()=>props.handleAddProduct(props.product)}
                 >
                    <FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>
        </div>
    );
};

export default Product;