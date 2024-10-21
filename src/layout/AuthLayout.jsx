import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Signup from '../pages/Auth/Signup'
import Login from '../pages/Auth/Login'
import Verification from '../pages/Auth/Verification'

const AuthLayout = () => {
  return (
    <Routes>
        <Route path='login' exact element={<Login />} />
        <Route path='signup' exact element={<Signup />} />
        <Route path='verifyemail' exact element={<Verification />} />
    </Routes>
  )
}

export default AuthLayout