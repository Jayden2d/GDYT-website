import Sample from "../assets/Sample.png";

function ProductCard() {
    return(
        <a href="" className="product-card">
        <div className="product-card-body">
            <img src={Sample} className="product-card-img"/>
            <h3 className="product-card-title>">Sample</h3>
            <p className="product-card-discription">junk & stuff</p>
            <p className="prouduct-card-price">12.99</p>
        </div>
        </a>
    );
}
export default ProductCard;