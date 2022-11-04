
import '../css/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


import Login from '../pages/Login';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Register from '../pages/Register';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/> 
          <Route path='/home' element={<Home/>}/> 
          <Route path='/book' element={<Book/>}/> 
          <Route path='/register' element={<Register/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;