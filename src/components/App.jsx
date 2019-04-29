import React, { Component, Fragment } from "react";
import "../styles/App.less";

import Link from "./Link";
import ProjectList from "./ProjectList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {};

    render() {
        return (
            <Fragment>
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

                <div className="flex-fill">
                    <ProjectList />
                </div>

                <footer className="footer-base">
                    <div className="footer-base__text footer-base_box maxwidth">
                        <p className="footer-base_copyright footer-base_text">
                            © {new Date().getFullYear()}&nbsp;
                            <a
                                href="https://www.newellbrands.com/"
                                target="_blank"
                                className="footer-base_link">
                                Newell Brands
                            </a>
                            ,&nbsp;All Rights Reserved &nbsp;|&nbsp;
                            <a
                                className="footer-base_link"
                                target="_blank"
                                href="https://www.newellbrands.com/terms-of-use">
                                {" "}
                                &nbsp;Legal
                            </a>
                        </p>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default App;
