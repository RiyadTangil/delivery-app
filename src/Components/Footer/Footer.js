import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer>
            <section style={{ backgroundColor: '#252A33' }}>
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <a className="text-decoration-none">
                            <h6 className="text-center m-0">©Food Delivery Website</h6>
                        </a>
                        <div className="footer-logo pt-4 pb-2 d-flex justify-content-center h4">

                            <a href="#"><FontAwesomeIcon className="text-secondary " icon={faFacebookF} /></a>
                            <a href="#" className="px-4"><FontAwesomeIcon className="text-secondary  " icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon className="text-secondary " icon={faInstagram} /></a>

                        </div>
                        <ul className="d-flex list-unstyled justify-content-between text-muted">
                            <li><a>about us</a></li>
                            <li className="px-md-3"><a>Privacy policy</a></li>
                            <li><a>Terms and conditions</a></li>

                        </ul>

                    </div>
                </div>
            </section>

        </footer>
    );
};

export default Footer;