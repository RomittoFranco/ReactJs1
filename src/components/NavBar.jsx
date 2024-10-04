import CartWidget from "./CartWidget/CartWidget"



const NavBar = () => {
    return(
        <nav>
            <h3>Horizonte interior</h3>
            <div>
                <button>Muebles</button>
                <button>Decoracion</button>
                <button>Comedor</button>
            </div>
        <CartWidget />
        </nav>
    )
}

export default NavBar