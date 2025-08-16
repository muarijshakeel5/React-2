import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Introduction from './components/Introduction'
import Services from './components/services'
import Work from './components/work'
import Contact from './components/contact'
import Footer from './components/footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Introduction/>
      <Services />
      <Work />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App