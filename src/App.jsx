import React from 'react'
import Services from './pages/Services'
import Navbar from './components/Navbar'

import Footer from './components/Footer'



import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Works from './pages/Works'
import Blog from './pages/Blog'
import Home from './pages/Home'
import ContactForm from './components/ContactForm'

const App = () => {
 
  return (
    <>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/work' element={<Works/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/contact' element={<ContactForm/>}/>
     
     
      
      </Routes>
      <Footer/>
      </>
  )
}

export default App
