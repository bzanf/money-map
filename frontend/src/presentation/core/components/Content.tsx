import { Outlet } from "react-router-dom";

const Content = () => (
    <section className="content">
        <div className="container-fluid">
            <Outlet />
        </div>
    </section>
);

export default Content;