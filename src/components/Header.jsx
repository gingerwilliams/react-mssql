import React, { Component } from "react";

const Header = () => {
    return (
        <div className="header-base_wrap">
            <header className="header-base header-base_box">
                <a className="logo logo_box logo_newell-brands-base" />
                <div className="header-base_title" alt="Website Title">
                    Node MSSQL React React Template
                </div>

                <div className="utility-base utility-base_box">
                    <div className="utility-base_wrap">
                        <ul className="utility-base_nav">
                            <li className="signinDiv utility-base_item">
                                <a
                                    href="/Login"
                                    className="button_text utility-base_link">
                                    <span className="button_icon button__left lnr lnr-power-switch" />
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
