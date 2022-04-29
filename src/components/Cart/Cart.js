
import React from 'react';
import './Cart.css'
// import Product from '../Product/Product';
import '../Product/Product.css'

const Cart = (props) => {
   
    const cart = props.cartItems;
    // console.log(cart);

    // const totalPrice = cart.reduce((total, product)=> total + product.price,0);
    let total = 0;
    for(let i =0; i<cart.length; i++){
        const product = cart[i];
        console.log(product);
        total = total + product.price;
    }

     let shipping = 0;

     if((total > 100 && total < 300 )){
         shipping = 10.90;
     }else if(total > 300 && total < 500){
        shipping = 5.90;
     }else if(total > 500){
         shipping = 0;
     }

     const tax = total * 2 / 100;
     const grand = (total + shipping + tax).toFixed(2);
     const grandTotal = Number(grand);

     const formatNumber = num =>{
         const precision = num.toFixed(2);
         return Number(precision);
     }

     
    return (
        <div className='myCart' >
            <h4 style={{textAlign:'center'}}>My Cart</h4>
            <p>Items ordered: {cart.length} </p>
            <p>Product Price: $ {formatNumber(total)} </p>
            <p>Shipping Cost : ${shipping} </p>
            <p><small>Tax + VAT: $ {tax} </small></p>
            <p>Total Price : ${grandTotal}</p>
            <button className='btn'> Buy Now </button>
        </div>
    )
        
};

export default Cart;