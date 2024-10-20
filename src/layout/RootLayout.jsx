import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        {/* <Route path='/contact' exact element={<Contact /> } /> */}
        <Route path='/dashboard' exact element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default Layout