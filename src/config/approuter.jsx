import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Dashboard from '../pages/dashboard'
import SignUp from '../components/signup'
import Signupshow from '../components/signupshow'
import Postshow from '../components/postshow'
import Post from '../components/postform'
import Commentform from '../components/commentform'
import Commentshow from '../components/commentshow'
import Todoform from '../components/todoform'
import Todoshow from '../components/todoshow'

function Approuter() {
  return (
 <BrowserRouter>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp />}/>
    <Route path='/signupshow' element={<Signupshow/>}/>
    <Route path='/postshow' element={<Postshow/>}/>
    <Route path='/postform' element={<Post/>}/>
    <Route path='/commentform' element={<Commentform />}/>
    <Route path='/commentshow' element={<Commentshow/>}/>
    <Route path='/todoform' element={<Todoform/>}/>
    <Route path='/todoshow' element={<Todoshow />}/>
    <Route path='dashboard/*' element={<Dashboard/>} />
 </Routes>
 </BrowserRouter>
  )
}

export default Approuter