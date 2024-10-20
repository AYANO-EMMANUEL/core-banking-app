import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'

const Layout = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      {/* <Route path='/contact' exact element={<Contact /> } /> */}
      <Route path='/dashboard' exact element={<Dashboard />} />
    </Routes>
  )
}

export default Layout