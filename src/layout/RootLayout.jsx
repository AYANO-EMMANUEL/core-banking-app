import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout