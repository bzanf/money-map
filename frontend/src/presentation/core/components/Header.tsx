import { Link } from "react-router-dom";

const Header = () => (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" role="button">
                    <i className="fas fa-bars"></i>
                </a>
            </li>
            {/* <li className="nav-item d-none d-sm-inline-block">
                <Link to="/" className="nav-link">Home</Link>
            </li> */}
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-slide="true" role="button">
                    <i className="fas fa-th-large"></i>
                </a>
            </li>
        </ul>
    </nav>
);

export default Header;