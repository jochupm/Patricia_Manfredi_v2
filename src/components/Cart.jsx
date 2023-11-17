import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from "react"
import CartItem from './CartItem'


const Cart = () => {

    const {cart, clearCart, totalQuantity,total}= useContext(CartContext)

    if(totalQuantity===0){
        return(
            <div>
                <h1>There are no items in your shopping cart</h1>
                <Link to='/' className='Option'> Products</Link>
            </div>
        )
    }
    return (
        <div>
            {/* {cart.map(p=><CartItem key={p.id}{p.price}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()} className="Button">Clean shopping cart</button> 
            <Link to='/checkout' className='Option'>Checkout</Link>  */}
        </div>
    )
}

export default Cart