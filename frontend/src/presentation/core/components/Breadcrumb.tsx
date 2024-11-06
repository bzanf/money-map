import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);

    return (
        <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
                <Link to="/">Home</Link>
            </li>
            {
                pathNames.map((value, index) => {
                    const to = `/${pathNames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathNames.length - 1;

                    return isLast ? (
                        <li key={to} className="breadcrumb-item active" aria-current="page">
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </li>
                    ) : (
                        <li key={to} className="breadcrumb-item">
                            <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                        </li>
                    );
                })
            }
        </ol>
    );
}

export default Breadcrumb;