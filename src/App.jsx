import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import LoadingScreen from './components/loadingscreen/LoadingScreen';

import CartCheckoutPage from './pages/CartCheckoutPage';
import HomePage from './pages/HomePage';
import LoginSignupPage from './pages/LoginSignupPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage';
import SellerDashboardPage from './pages/SellerDashboardPage';
import UserProfilePage from './pages/UserProfilePage';

import "./App.css";
import { CartProvider } from "./CartContext";

const AppContent = () => {
  const location = useLocation()
  const [pageLoading, setPageLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    const onHomePage = location.pathname === "/"
    const delay = onHomePage ? 1000 : 400

    const loadingTimer = setTimeout(() => {
      setPageLoading(false)
    },delay)

    return () => clearTimeout(loadingTimer)
  }, [location.pathname])

  if (pageLoading) {
    return <LoadingScreen />
  }

  if (!isLoggedIn && location.pathname === "/") {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div 
     className='main_container'
    >
      {location.pathname !== "/auth" && <Navbar isLoggedIn={isLoggedIn}/>}
      <Routes>
        <Route
          path="/auth"
          element={<LoginSignupPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route element={<HomePage/>} path="/" />
        <Route element={<ProductsPage/>} path="/products" />
        <Route element={<ProductDetailsPage/>} path="/product-details" />
        <Route element={<UserProfilePage/>} path="/user-profile" />
        <Route element={<SellerDashboardPage/>} path="/seller-dashboard" />
        <Route element={<CartCheckoutPage/>} path="/cart-checkout" />
      </Routes>
      {location.pathname !== "/auth" && <Footer />}
    </div>
  )
}

const App = () => (
  <CartProvider>
    <Router>
      <AppContent />
    </Router>
  </CartProvider>
);

export default App;