import MenuItem from "./MenuItem";

const Sidebar = () => (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/#" className="brand-link d-flex align-items-center">
            <i className="fas fa-usd mr-2" style={{ fontSize: 26, paddingLeft: 20 }}></i>
            <span className="brand-text font-weight-light">Money Map</span>
        </a>
        <div className="sidebar">
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
                    <MenuItem path="/#" label="Dashboard" icon="dashboard" />
                    <MenuItem path="/#billing-cycles" label="Billing Cycles" icon="usd" />
                </ul>
            </nav>
        </div>
    </aside>
);

export default Sidebar;