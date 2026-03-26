import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Investors from './components/Investors.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div id="hero"><Hero /></div>
      <Features />
      <div id="products"><Products /></div>
      <div id="invest"><Investors /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

export default App
