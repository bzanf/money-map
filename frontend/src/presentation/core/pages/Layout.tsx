import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ContentHeader from "../components/ContentHeader";
import Content from "../components/Content";

function Layout() {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader />
                <Content />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;