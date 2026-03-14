import { useState } from 'react'
import Navbar from './Components/Nav'
import Services from './Components/Service'
import GetQuote from './Components/contact'
import Footer from './Components/Footer'
import './App.css'
import Hero from './Components/Hero'

function App() {
 
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <GetQuote/>
    <Footer/>
    </>
  )
}

export default App
