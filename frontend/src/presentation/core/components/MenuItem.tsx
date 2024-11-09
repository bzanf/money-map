import { Link } from "react-router-dom";

interface MenuItemProps {
    path: string;
    label: string;
    icon: string;
    active: boolean;
}

const MenuItem = (props: MenuItemProps) => (
    <li className="nav-item">
        <Link to={props.path} className={"nav-link" + (props.active ? ' active' : '')}>
            <i className={`nav-icon fas fa-${props.icon}`}></i>
            <p>{props.label}</p>
        </Link>
    </li>
);

export default MenuItem;