import DarkModeToggle from "./DarkModeToggle";
const Header = () => {
  return (
    <>
      <header className="main-header navbar">
        <div className="col-search">
        </div>
        <div className="col-nav">
          <ul className="nav">
            <li className="nav-item">
              <DarkModeToggle />
            </li>
            <li className="nav-item">
              <a className="nav-link btn-icon" href="#">
                <i className="material-icons md-notifications animation-shake"></i>
                <span className="badge rounded-pill">3</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
