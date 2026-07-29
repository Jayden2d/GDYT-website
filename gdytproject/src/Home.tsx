import ProductCrad from "./components/ProductCard"

function Home() {
  return (
    <>
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
      <ProductCrad />
      <div className="main">
        <div className="content">
          <ProductCrad />
          <ProductCrad />
        </div>
      </div>
    </>
  )
}

export default Home
