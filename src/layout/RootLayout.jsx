import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import Activity from '../pages/Activity/Activity'

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <Routes>
        <Route path='/' exact element={<Home />} />
        {/* <Route path='/contact' exact element={<Contact /> } /> */}
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/activity' element={<Activity />} />
      </Routes>
    </>
  )
}

export default Layout