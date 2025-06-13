import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header 
      className='navbar'
    >
      <div 
        className='navbar_title'
      ><Link to='/'>Forest</Link></div>
      <div 
        className='navbar_buttons'
      >
      <Link to='/'>Home</Link>
      <Link to='/seller-dashboard'>Sell</Link>
      <Link to='/products'>Products</Link>
      <Link to='/cart-checkout'>Checkout</Link>
      <Link to='/user-profile'>Profile</Link>
      </div>
    </header>
  )
}

export default Navbar;