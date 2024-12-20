import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="main-footer">
        <strong>Copyright &copy; 2024 <Link to="/">Money Map</Link>.</strong>
        &nbsp;All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 0.0.1
        </div>
    </footer>
);

export default Footer;