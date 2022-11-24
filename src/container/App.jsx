import '../css/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import React, { useState } from 'react'


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

function App() {

  const [user, setUser] = useState();

  return (



    <div className="App">
      <BrowserRouter >
        <UserContext.Provider value={{ user, setUser }} >

          <Routes>
            <Route path='/' element={<Navigate to="/home" replace={true} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/order' element={<Order/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/book' element={<Book />} />
            <Route path='/addbook' element={<AddBook />} />
            <Route path='/register' element={<Register />} />
            <Route path='/bestseller' element={<BestSeller />} />
            <Route path='/search' element={<Searcher />} />
            <Route path='/orderuser' element={<OrderUser/>}/>

            <Route path='/logout' element={<ProtectedRoute isAllowed={!!user} />}>
              <Route path='/logout' element={<Logout />} />
            </Route>

            <Route path='/admin' element={<ProtectedRoute isAllowed={!!user && user.admin == true} />}>
              <Route path='/admin' element={<Admin />} />
            </Route>

          </Routes>

        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;