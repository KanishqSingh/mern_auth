import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

import VerifyEmail from './pages/VerifyEmail'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/verifyemail' element={<VerifyEmail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>

      
    </div>
  )
}

export default App