import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,  } from '@fortawesome/free-solid-svg-icons'
import './Owner.css'

const OwnerSection = () => {
    return (
        <section style={{ backgroundColor: "#faf3f4" }}>
            <div className="container">

                <div className="d-flex flex-column align-items-center justify-content-center Owner-section">
                    <h1>Become A Restaurant Owner</h1>
                    <h4 className="text-muted fw-light text-center  pb-4">Do you want to add your own restaurants and food menus?</h4>
                    <button className="btn primary-btn py-md-3 px-md-5"> <span className="px-md-2"><FontAwesomeIcon icon={faPlus} /></span> become restaurant owner</button>

                </div>
            </div>
        </section>
    );
};

export default OwnerSection;