import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Tag from './components/Tag'
import Speakers from './components/Speakers'
import Register from './components/Register'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Tag/>
      <Speakers/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default App

