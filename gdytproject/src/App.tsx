import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <div className="banner">
        <h1>placeholder</h1>
      </div>

      <div className="main">
        <h1>
          trading cards & games, posters and more
        </h1>
        <p style={{color: 'black'}}>
          Selling and trading 
        </p>
      </div>

      <Footer />
      


    </>
  )
}

export default App
