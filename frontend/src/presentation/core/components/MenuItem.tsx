const MenuItem = (props: { path: string, label: string, icon: string }) => (
    <li className="nav-item">
        <a href={props.path} className="nav-link">
            <i className={`nav-icon fas fa-${props.icon}`}></i>
            <p>{props.label}</p>
        </a>
    </li>
);

export default MenuItem;