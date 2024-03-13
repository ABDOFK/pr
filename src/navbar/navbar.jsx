import './navbar.css';
import Logo  from './img/logo.svg'; // Assuming you have a logo.svg file
 // Assuming you have a logo.svg file
 import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { ReactComponent as AdminIcon } from './admin-icon.svg'; // Assuming you have an admin-icon.svg file
// import { ReactComponent as BasketIcon } from './basket-icon.svg'
import PersonIcon from '@mui/icons-material/Person';
function Navbar() {
  return (
    <div>
             <div className="top-bar">
             <img src={Logo} alt="Logo" width="50" />
      <h1>Parapharma</h1>
<input type="text" placeholder="Search..." className="search-bar"  />
        <div className="icons">
          <PersonIcon className="icon" />
          <AddShoppingCartIcon className="icon" /> 
        </div>
      </div>
      <nav>
        <ul>
          <li className="dropdown">
            <a href="/">VISAGE</a>
            <div className="dropdown-content">
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">MAQUILLAGE</a>
            <div className="dropdown-content">
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">CHEUVEUX</a>
            <div className="dropdown-content">
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">BÉBÉ & MAMAN</a>
            <div className="dropdown-content">
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">HOMME</a>
            <div className="dropdown-content">
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">SOLAIRE</a>
            <div className="dropdown-content">
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">SANTÉ</a>
            <div className="dropdown-content">
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">PARA-MÉDICAL</a>
            <div className="dropdown-content">
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">BIO</a>
            <div className="dropdown-content">
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">PROMOTION</a>
            <div className="dropdown-content">
              
              <a href="/">Item 1</a>
              <a href="/">Item 2</a>
              <a href="/">Item 3</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
