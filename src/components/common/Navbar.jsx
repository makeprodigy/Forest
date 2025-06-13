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
          Home
        </Link>
        <Link 
          to='/seller-dashboard' 
          className={location.pathname === '/seller-dashboard' ? 'active' : ''}
        >
          Sell
        </Link>
        <Link 
          to='/products' 
          className={location.pathname === '/products' ? 'active' : ''}
        >
          Products
        </Link>
        <Link 
          to='/cart-checkout' 
          className={location.pathname === '/cart-checkout' ? 'active' : ''}
        >
          Checkout
        </Link>
        <Link 
          to='/user-profile' 
          className={location.pathname === '/user-profile' ? 'active' : ''}
        >
          Profile
        </Link>
      </div>
    </header>
  );
};

export default Navbar;