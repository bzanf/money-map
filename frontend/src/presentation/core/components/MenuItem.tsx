import { Link } from "react-router-dom";

const MenuItem = (props: { path: string, label: string, icon: string }) => (
    <li className="nav-item">
        <Link to={props.path} className="nav-link">
            <i className={`nav-icon fas fa-${props.icon}`}></i>
            <p>{props.label}</p>
        </Link>
    </li>
);

export default MenuItem;