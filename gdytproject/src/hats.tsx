import './App.css'
import ProductCard from './components/ProductCard'

function hats(){
    return(
 <>
      <div className="banner">
        <h1>hats</h1>
      </div>

      <div className="main">
        <h1>
          Find the hat that fits your story
        </h1>
        <p style={{color: 'black'}}>
                  Selling
        </p>
        
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