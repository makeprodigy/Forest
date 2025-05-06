import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
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

const AppContent = () => {
  const location = useLocation()
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const onHomePage = location.pathname === "/"
    const delay = onHomePage ? 3000 : 500

    const loadingTimer = setTimeout(() => {
      setPageLoading(false)
    },delay)

    return () => clearTimeout(loadingTimer)
  }, [location.pathname])

  if (pageLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<LoginSignupPage/>} path="/auth" />
        <Route element={<HomePage/>} path="/" />
        <Route element={<ProductsPage/>} path="/products" />
        <Route element={<ProductDetailsPage/>} path="/product-details" />
        <Route element={<UserProfilePage/>} path="/user-profile" />
        <Route element={<SellerDashboardPage/>} path="/seller-dashboard" />
        <Route element={<CartCheckoutPage/>} path="/cart-checkout" />
      </Routes>
      <Footer />
    </>
  )
}

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;