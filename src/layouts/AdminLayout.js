import Sidebar from "../components/admin/Sidebar.js";
// import Header from "../components/admin/Header.js";
import { Outlet } from "react-router-dom";

function AdminLayout({ children }) {

    return (

        <div style={{ display: "flex" }}>

            <Sidebar />

            <div style={{ flex: 1 }}>
                {/* <Header /> */}
                <div style={{ padding: "30px" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;