const Sidebar = () => (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" className="brand-link">
            <span className="brand-text font-weight-light">AdminLTE</span>
        </a>
        <div className="sidebar">
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/settings" className="nav-link">
                            <i className="nav-icon fas fa-cog"></i>
                            <p>Settings</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
);

export default Sidebar;