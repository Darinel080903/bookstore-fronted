
import '../css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'

import Login from '../pages/Login';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Register from '../pages/Register';
import { UserContext } from '../context/UserContext';


function App() {

  const value = useContext(UserContext);

  return (

    <div className="App">
      <BrowserRouter >
        <UserContext.Provider value={{ isLogged: "true" }} >
          <Routes>

            <Route path='/' element={  <Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/book' element={<Book />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;