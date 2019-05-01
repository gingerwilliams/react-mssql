import React, { Component } from "react";

const Footer = () => {
    return (
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
    );
};

export default Footer;
