import Sample from "../assets/Sample.png";

function ProductCard() {
    return(
        <a href="" className="product-card">
        <div className="product-card-body">
            <img src={Sample} className="product-card-img"/>
            <h3 className="product-card-title>">Sample</h3>
            <p className="product-card-discription">Pokémon</p>
            <p className="prouduct-card-price">$30.00</p>
        </div>
        </a>
    );
}
export default ProductCard;