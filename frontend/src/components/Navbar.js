import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <div className="navmenu">
                <Link to="/">
                    <img className="logo" src="/Shopaholic.png" alt="Shopaholic"  />
                </Link>
                <Link to="/">
                    <img className="link" src="/Pealeht.png" alt="Pealeht"  />
                </Link>
                <Link to="/categories">
                <img className="link" src="/Kategooriad.png" alt="Kategooriad" />
                </Link>
                <Link to="/admin">
                <button>Admini vaatesse</button>
                </Link>


            </div>
            <div className="navcart">
            <Link to="/cart">
                <img className="cart" src="/cart.svg" alt="cart" />
            </Link>
            


            </div>
        </div>
    );

}

export default Navbar;