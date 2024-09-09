import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
 function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/home" element={<LandingPage/>}></Route>
    </Routes>
   
   </BrowserRouter>
  )
}
export default App