import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-around w-100">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                BIENVENIDO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AcercadeMi">
                Acerca de Mi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AlgoMas">
                Algo Más
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
