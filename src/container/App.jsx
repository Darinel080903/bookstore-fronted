import '../css/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import React, { useState } from 'react'


import Login from '../pages/Login';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Register from '../pages/Register';
import BestSeller from '../pages/BestSeller'
import Searcher from '../pages/Searcher';
import Admi from '../pages/Admi';
import PrivateRoute from '../context/PrivateRute';

function App() {

  const [user, setUser] = useState(null);

  return (



    <div className="App">
      <BrowserRouter >
        <UserContext.Provider value={{ user, setUser }} >

          <Routes>
            <Route path='/' element={ <Navigate to="/home" replace={true} /> } />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/book' element={<Book />} />
            <Route path='/register' element={<Register />} />
            <Route path='/bestseller' element={<BestSeller/>} />
            <Route path='/search' element={<Searcher/>} />
            
            <Route element={<PrivateRoute/>}>
              <Route path='/admi' element={<Admi/>} />
            </Route>

          </Routes>
          
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;