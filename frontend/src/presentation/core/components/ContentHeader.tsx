import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const ContentHeader = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);
    const currentPage = pathNames.length > 0
        ? pathNames[0].charAt(0).toUpperCase() + pathNames[0].slice(1)
        : 'Home';

    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="m-0">{currentPage}</h1>
                    </div>
                    <div className="col-sm-6">
                        <Breadcrumb pathNames={pathNames} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentHeader;