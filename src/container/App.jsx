import '../css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import React, { useState } from 'react'


import Login from '../pages/Login';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Register from '../pages/Register';
import BestSeller from '../pages/BestSeller'
import Searcher from '../pages/Searcher';


function App() {

  const [user, setUser] = useState(null);

  return (



    <div className="App">
      <BrowserRouter >
        <UserContext.Provider value={{ user, setUser }} >

          <Routes>
            <Route path='/' element={  <Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/book' element={<Book />} />
            <Route path='/register' element={<Register />} />
            <Route path='/bestseller' element={<BestSeller/>} />
            <Route path='/search' element={<Searcher/>} />
          </Routes>
          
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;