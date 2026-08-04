import './App.css'
import ProductCard from './components/ProductCard'
import { Link } from 'react-router-dom'

function Cards(){
    return(
 <>
      <div className="banner">
        <h1>
          Every card has a story—find your next favorite
        </h1>
        <p style={{color: 'black'}}>
          Selling and trading
        </p>
        <Link to="" className="banner-button">
          shop now
        </Link>
      </div>

      <div className="main">
        <div className="content">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
    )
}

export default Cards