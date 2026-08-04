import ProductCard from "./components/ProductCard"

function Home() {
  return (
    <>

      <div className="banner">
        <h1>
          trading cards & games, posters and more
        </h1>
        <p style={{color: 'black'}}>
          Selling and trading
        </p>
        <a href="" className="banner-button">
          shop now
        
        </a>
        
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

export default Home
