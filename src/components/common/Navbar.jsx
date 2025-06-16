import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get the current route

  return (
    <header className='navbar'>
      <div className='navbar_title'>
        <Link to='/'>Forest</Link>
      </div>
      <div className='navbar_buttons'>
        <Link 
          to='/' 
          className={location.pathname === '/' ? 'active' : ''}
        >
          <span>Home</span>
        </Link>
        <Link 
          to='/seller-dashboard' 
          className={location.pathname === '/seller-dashboard' ? 'active' : ''}
        >
          <span>Sell</span>
        </Link>
        <Link 
          to='/products' 
          className={location.pathname === '/products' ? 'active' : ''}
        >
          <span>Products</span>
        </Link>
        <Link 
          to='/cart-checkout' 
          className={location.pathname === '/cart-checkout' ? 'active' : ''}
        >
          <span>Checkout</span>
        </Link>
        <Link 
          to='/user-profile' 
          className={location.pathname === '/user-profile' ? 'active' : ''}
        >
          <span>Profile</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;