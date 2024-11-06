import { Outlet } from "react-router-dom";

const Content = () => (
    <section className="content">
        <Outlet />
    </section>
);

export default Content;