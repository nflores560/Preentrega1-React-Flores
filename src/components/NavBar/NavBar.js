import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to= '/'>
              <h3>Mi Petshop Virtual</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/alimentoParaPerros`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Alimento para perros </NavLink>
                <NavLink to={`/category/alimentoParaGatos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Alimento para gatos </NavLink>
                <NavLink to={`/category/accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Accesorios </NavLink> 
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;