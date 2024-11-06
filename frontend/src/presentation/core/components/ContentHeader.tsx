import Breadcrumb from "./Breadcrumb";

const ContentHeader = () => (
    <section className="content-header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <h1 className="m-0">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                    <Breadcrumb />
                    {/* <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol> */}
                </div>
            </div>
        </div>
    </section>
);

export default ContentHeader;