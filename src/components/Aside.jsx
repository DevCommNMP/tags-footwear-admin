import { useState } from "react";
import { Link } from "react-router-dom";
// const navigate = useNavigate();
import logo from "../assets/imgs/theme/logo.png";

const Aside = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(true);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img src={logo} className="logo" alt="Nest Dashboard" />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted material-icons md-menu_open"></i>
            </button>
          </div>
        </div>
        <nav>
          <ul className="menu-aside">
            <li className="menu-item active">
              <Link to="/" className="menu-link">
                <i className="icon material-icons md-home"></i>
                <span className="text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item has-submenu">
              <a className="menu-link" onClick={toggleSubMenu}>
                <i className="icon material-icons md-shopping_bag"></i>
                <span className="text">Products</span>
              </a>
              <div
                className="submenu"
                style={{ display: isSubMenuVisible ? "block" : "none" }}
              >
                <Link to="/products-list">Manage Products</Link>
                <Link to="/add-product">Add Product</Link>
              </div>
              <hr />
              <div
                className="submenu"
                style={{ display: isSubMenuVisible ? "block" : "none" }}
              >
                <Link to="/manage-categories">Manage Categories</Link>
                <Link to="/add-categories">Add Categories</Link>
              </div>
            </li>
          </ul>
          <hr />
          <ul className="menu-aside">
            <li className="menu-item active">
              <Link to="/" className="menu-link">
                <i className="icon material-icons md-home"></i>
                <span className="text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item has-submenu">
              <a className="menu-link" onClick={toggleSubMenu}>
                <i className="icon material-icons md-shopping_bag"></i>
                <span className="text">Products</span>
              </a>
              <div
                className="submenu"
                style={{ display: isSubMenuVisible ? "block" : "none" }}
              >
                <Link to="/products-list">Manage Products</Link>
                <Link to="/add-product">Add Product</Link>
              </div>
              <hr />
              <div
                className="submenu"
                style={{ display: isSubMenuVisible ? "block" : "none" }}
              >
                <Link to="/manage-categories">Manage Categories</Link>
                <Link to="/add-categories">Add Categories</Link>
              </div>
            </li>
          </ul>
          <hr />

          <ul className="menu-aside">
            <li className="menu-item has-submenu">
              <Link to="/blank" className="menu-link">
                <i className="icon material-icons md-apps"></i>
                <span className="text">Other Application</span>
              </Link>
              <div className="submenu">
                <Link to="/blank">Setting sample 1</Link>
                <Link to="/blank">Setting sample 2</Link>
              </div>
            </li>
            <li className="menu-item">
              <Link to="/blank" className="menu-link">
                <i className="icon material-icons md-local_offer"></i>
                <span className="text"> Starter page </span>
              </Link>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </>
  );
};

export default Aside;
