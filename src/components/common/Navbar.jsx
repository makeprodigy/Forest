import React from 'react'

const Navbar = () => {
  return (
    <header 
      className='navbar'
    >
      <div 
        className='navbar_title'
      >Forest</div>
      <div 
        className='navbar_buttons'
      >
      <a href='/'>Home</a>
      <a href='/seller-dashboard'>Sell</a>
      <a href='/products'>Products</a>
      <a href='/cart-checkout'>Checkout</a>
      <a href='/user-profile'>Profile</a>
      </div>
    </header>
  )
}

export default Navbar