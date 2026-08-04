import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home'
import Cards from './cards'
import Hats from './hats'
import Checkout from './checkout'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
      </>
  )
}

export default App