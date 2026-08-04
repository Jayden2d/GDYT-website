import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav>
            <ul className="nav-links">
                <li> <Link to="/">home</Link></li>
                <li> <Link to="/hats">hats</Link></li>
                <li> <Link to="/cards">cards</Link></li>
                <li> <Link to="/checkout">checkout</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar