import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import type { ReactNode } from 'react';


function App() {
  type CheckIfLoggedInProps = {
    children : ReactNode
  }
  function CheckIfLoggedIn({children}: CheckIfLoggedInProps){
    const isLoggedIn = localStorage.getItem('user-is-logged-in');
    
    return isLoggedIn === 'true' ? children : <Navigate to="/" replace></Navigate>;
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Home' element={<CheckIfLoggedIn><Home/></CheckIfLoggedIn>}/>
      </Routes>
    </>
  )
}

export default App
