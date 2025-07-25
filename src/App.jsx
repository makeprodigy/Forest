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
import PaymentGateway from './components/cartcheckout/PaymentGateway';

import { CartProvider } from "./components/cartcheckout/CartContext";

const AppContent = () => {
  const location = useLocation()
  const [pageLoading, setPageLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    const onHomePage = location.pathname === "/"
    const delay = onHomePage ? 1500 : 600

    const loadingTimer = setTimeout(() => {
      setPageLoading(false)
    }, delay)

    return () => clearTimeout(loadingTimer)
  }, [location.pathname])

  if (pageLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen flex flex-col bg-page-gradient">
      {location.pathname !== "/auth" && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      
      <main className="flex-1">
        <Routes>
          <Route
            path="/auth"
            element={<LoginSignupPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route element={<HomePage/>} path="/" />
          <Route element={<ProductsPage/>} path="/products" />
          <Route element={<ProductDetailsPage/>} path="/product-details/:id" />
          <Route element={<UserProfilePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} path="/user-profile" />
          <Route element={<SellerDashboardPage/>} path="/seller-dashboard" />
          <Route element={<CartCheckoutPage/>} path="/cart-checkout" />
          <Route element={<PaymentGateway/>} path="/payment" />
        </Routes>
      </main>
      
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