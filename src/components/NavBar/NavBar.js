import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Mi Petshop Virtual</h3>
            <div>
                <button>Alimentos para perros</button>
                <button>Alimentos para gatos</button>
                <button>Accesorios para mascotas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar