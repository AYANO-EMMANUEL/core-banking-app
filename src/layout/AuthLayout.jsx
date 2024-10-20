import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from '../pages/Auth/Signup'
import Login from '../pages/Auth/Login'

const AuthLayout = () => {
  return (
    <Routes>
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
    </Routes>
  )
}

export default AuthLayout