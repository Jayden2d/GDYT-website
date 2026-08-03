import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer>
            <p>all rights reserves</p>
            <ul className='footer-list'>
                <li> <Link to="/">home</Link></li>
                <li> <Link to="/hats">hats</Link></li>
                <li> <Link to="/cards">cards</Link></li>
                <li> checkout</li>
            </ul>
        </footer>
    )
}
export default Footer
    
