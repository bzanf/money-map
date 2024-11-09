import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ContentHeader from "../components/ContentHeader";
import Content from "../components/Content";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { updateLocation } from "../store/slices/locationSlice";

function BaseLayout() {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateLocation(location.pathname));
    }, [location, dispatch]);

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

export default BaseLayout;