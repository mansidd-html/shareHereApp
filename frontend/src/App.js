import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import Home from './Containers/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App