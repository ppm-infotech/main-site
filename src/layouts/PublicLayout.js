import { Outlet } from "react-router-dom";
import Header from "../components/Header1";
import Footer from "../components/Footer1";

function PublicLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default PublicLayout;