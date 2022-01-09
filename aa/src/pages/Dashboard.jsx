import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import routes from "../data/routes";
import logout from "../assets/logout.png";

function Dashboard() {

    function logout_button() {
        window.location.reload();
    }

    return (
        <div>

            <Sidebar />
            <div className="logout">
                <img src={logout} alt="" onClick={logout_button} height="40px" />
            </div>
            <div className="content">

                <div>
                    <h3 style={{ textAlign: 'center', margin: '15px' }}>ANJALAI AMMAL MAHALINGAM ENGINEERING COLLEGE</h3>
                </div><br />
                <Routes>
                    {routes.map(({ Component, path }) => (
                        <Route path={path} element={<Component />} />
                    ))}
                </Routes>

            </div>

        </div>
    );
}
export default Dashboard;
