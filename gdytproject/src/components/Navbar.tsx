import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav>
            <ul className="nav-links">
                <li> <Link to="/">home</Link></li>
                <li> <Link to="/hats">hats</Link></li>
                <li> <Link to="/cards">cards</Link></li>
                <li> checkout</li>
            </ul>
            


        </nav>
    )
}

export default Navbar