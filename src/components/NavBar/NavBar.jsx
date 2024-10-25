import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav>
      <h3>Horizonte Interior</h3>
      <div>
        <Link to="/muebles"><button>Muebles</button></Link>
        <Link to="/decoracion"><button>Decoración</button></Link>
        <Link to="/comedor"><button>Comedor</button></Link>
        <Link to="/about"><button>Acerca de</button></Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;