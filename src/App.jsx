import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Introduce from './components/Introduce'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to={'/'}>
            <li>Introduce</li>
          </Link>
          <Link to={'/login'}>
            <li>Login</li>
          </Link>
          <Link to={'/register'}>
            <li>Register</li>
          </Link>
        </ul>

        <Routes>
          <Route path='/' element={<Introduce />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App