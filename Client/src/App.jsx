import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'  // Import Navigate
import Auth from './Components/auth/Auth'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import Admin from './Components/Admin/Admin'
import Orders from './Pages/Admin/Orders'
import Products from './Pages/Admin/Products'
import Features from './Pages/Admin/Features'
import Dashboard from './Pages/Admin/Dashboard'
import Shopping from './Components/Shopping/Shopping'

import Account from './Pages/Shopping/account'
import Checkout from './Pages/Shopping/checkout'
import CheckAuth from './Components/Common/Checkauth'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './features/Authslice/authslice'
import { ToastContainer} from 'react-toastify'; // Import Toastify
import Home from "./Pages/Shopping/home"
import Listing from './Pages/Shopping/listing'


const App = () => {
  const { isAuthenticated, user, isLoading } = useSelector((state) => state.authen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch])

  if (isLoading) return <div>loading....</div>

  return (
    <>
      <div className='flex flex-col overflow-hidden bg-white'>
      <ToastContainer
 
/>


  
        <Routes>
          {/* Redirect root to home page */}
          <Route path="/" element={<Navigate to="/shop/home" replace />} />

          {/* Auth Routes */}
          <Route path="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}><Auth /></CheckAuth>}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Admin Routes - Nested */}
          <Route path="/admin" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}><Admin /></CheckAuth>}>
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="features" element={<Features />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* Shopping Routes */}
          <Route path="/shop" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}><Shopping /></CheckAuth>}>
            <Route path="home" element={<Home/>} />
            <Route path="listing" element={<Listing/>} />
            <Route path="account" element={<Account />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
