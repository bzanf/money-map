import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    pathNames: string[];
}

const Breadcrumb = (props: BreadcrumbProps) => (
    <ol className="breadcrumb float-sm-right">
        {
            props.pathNames.length > 0 && (
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
            )
        }
        {
            props.pathNames.map((value, index) => {
                const to = `/${props.pathNames.slice(0, index + 1).join('/')}`;
                const isLast = index === props.pathNames.length - 1;

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
)

export default Breadcrumb;