import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home'
import Cards from './cards'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>

      <Footer />
      </>
  )
}

export default App