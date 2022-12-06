import '../css/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Register from '../pages/Register';
import BestSeller from '../pages/BestSeller'
import AddBook from '../pages/AddBook';
import Searcher from '../pages/Searcher';
import Order from '../pages/Order';
import Admin from '../pages/Admin';
import Logout from '../pages/Logout';
import ProtectedRoute from '../components/ProtectedRoute'
import OrderUser from '../pages/OrderUser';
import NotFound from '../pages/NotFound';
import Buying from '../pages/Buying';
import Account from '../pages/Account';



function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));


  return (


    <div className="App">
      <BrowserRouter >
        <Routes>

          <Route path='/register' element={<ProtectedRoute isAllowed={user == null} />}>
            <Route path='/register' element={<Register />} />
          </Route>

          <Route path='/login' element={<ProtectedRoute isAllowed={user == null} />}>

            <Route path='/login' element={<Login />} />
          </Route>

          <Route path='/' element={<Navigate to="/home" replace={true} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/book' element={<Book />} />
          <Route path='/bestseller' element={<BestSeller />} />
          <Route path='/search' element={<Searcher />} />

          
          <Route path='/account' element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path='/account' element={<Account />} />
          </Route>

          <Route path='/orderuser' element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path='/orderuser' element={<OrderUser />} />
          </Route>

          <Route path='/order' element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path='/order' element={<Order />} />
          </Route>

          <Route path='/cart' element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path='/cart' element={<Cart />} />
          </Route>

          <Route path='/buying' element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path='/buying' element={<Buying />} />
          </Route>

          <Route path='/logout' element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path='/logout' element={<Logout />} />
          </Route>

          <Route path='/admin' element={<ProtectedRoute isAllowed={!!user && user.admin == true} />}>
            <Route path='/admin' element={<Admin />} />
          </Route>


          <Route path='/*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;