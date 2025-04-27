import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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

const App = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setPageLoading(false);
    },3000);

    return () => clearTimeout(loadingTimer);
  })

  if (pageLoading) {
    return <LoadingScreen />
  }

  return (
    <>

    </>
  )
}

export default App;