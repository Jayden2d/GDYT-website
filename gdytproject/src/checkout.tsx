import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sample from "./assets/Sample.png";

function checkout(){
    return(
        <div className='checkout-container'>
            <h3>Shopping Cart</h3>
            <h3>Everthing is on sell for two weeks</h3>
            <a href="" className="checkout-card">
        <div className="checkout-card-body">
            <img src={Sample} className="checkout-card-img"/>
            <h3 className="checkout-card-title>">Sample</h3>
            <p className="checkout-card-discription">Pokémon</p>
            <p className="checkout-card-price">$30.00</p>
        </div>
        </a>

        </div>
    )
}
export default checkout