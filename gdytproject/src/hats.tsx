import './App.css'
import ProductCard from './components/ProductCard'
import { Link } from 'react-router-dom'

function hats(){
    return(
 <>
      <div className="banner">
        <h1>
          Find the hat that fits your story
        </h1>
        <p style={{color: 'black'}}>
                  Selling
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

export default hats