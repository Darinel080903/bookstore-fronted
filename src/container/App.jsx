import '../css/App.css'
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
=======
import { BrowserRouter, Routes, Route} from 'react-router-dom'
>>>>>>> b27eb5a626074ab7c389e28f0d1a3a8e5a581e15

import Login from '../pages/Login';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Register from '../pages/Register';
<<<<<<< HEAD
import { UserContext } from '../context/UserContext';
=======
import BestSeller from '../pages/BestSeller';
>>>>>>> b27eb5a626074ab7c389e28f0d1a3a8e5a581e15


function App() {

  const value = useContext(UserContext);

  return (

    <div className="App">
<<<<<<< HEAD
      <BrowserRouter >
        <UserContext.Provider value={{ isLogged: "true" }} >
          <Routes>

            <Route path='/' element={  <Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/book' element={<Book />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          
        </UserContext.Provider>
=======
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/> 
          <Route path='/home' element={<Home/>}/> 
          <Route path='/book' element={<Book/>}/> 
          <Route path='/bestseller' element={<BestSeller/>}/>
          <Route path='/register' element={<Register/>}/> 
        </Routes>
>>>>>>> b27eb5a626074ab7c389e28f0d1a3a8e5a581e15
      </BrowserRouter>
    </div>
  )
}

export default App;