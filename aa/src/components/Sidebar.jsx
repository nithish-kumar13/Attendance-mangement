import React from "react";
import { Link } from "react-router-dom";
import links from "../data/Links";
import logo from "../assets/logo.png"

function Sidebar() {


    return (
        <div>
            {/* <nav class="navbar navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <h3><b>ANJALAI AMMAL MAHALINGAM ENGINEERING COLLEGE-KOVILVENNI</b></h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                   
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav> */}
            <div className="sidebar">
                <img src={logo} height="100px" style={{ textAlign: 'center', justifyContent: 'center' }} alt="" /><br />
                <div className="align-items-left" style={{ textAlign: 'left' }}>
                    {links.map(({ link, title }) => (
                        <Link
                            key={title}
                            to={link}
                        >{title}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Sidebar;