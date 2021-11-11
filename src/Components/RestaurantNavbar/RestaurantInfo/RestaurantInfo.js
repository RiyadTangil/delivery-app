import React from 'react';
import './RestaurantInfo.css'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpen, faMapMarkerAlt, faMobileAlt, } from '@fortawesome/free-solid-svg-icons';
const RestaurantInfo = () => {
    return (
        <div >
            <div className='restaurant-info'>
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="card-img-top px-2" alt="..."></img>

            </div>
            <div style={{ transform: "translateY(-80px)" }}>
                <div className='d-flex justify-content-center'>
                    <div className="logo-cotainer">
                        <img src="https://i.ytimg.com/vi/AUml2IgSFCQ/maxresdefault.jpg" className="img-fluid" alt="..."></img>
                    </div>

                </div>
                <div className="bg-white ">
                    <div className="container  py-4">
                        <div className="row ">
                            <div className="col-md-6 col-sm-12">
                                <div className="d-flex justify-content-start align-items-center">
                                    <div>
                                        <h3 className="text-muted">Burger King <span className="bg-success text-white px-3 rounded-3">0</span></h3>
                                        <h6 className="text-muted fw-light pt-3"><span className="text-danger px-1  "><FontAwesomeIcon icon={faCheckSquare} /></span> North Indian</h6>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="d-flex justify-content-end align-items-center">
                                    <div>
                                        <p className="text-muted text-end p-0 m-0">Delivery charge : <span>€10</span></p>
                                        <p className="text-muted text-end">Maximum time to deliver : <span className=" px-1 ">10:16</span>Minutes.</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container bg-white  ">
                    <div className="row Regular shadow py-4 mt-2 px-2">
                        <div className="col-lg-7 p-0 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i> <FontAwesomeIcon className="text-warning " icon={faMapMarkerAlt} /></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className="email">
                                    <i> <FontAwesomeIcon className="text-warning " icon={faEnvelopeOpen} /></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div className="phone">
                                    <i> <FontAwesomeIcon className="text-warning " icon={faMobileAlt} /></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>


                            </div>
                        </div>


                        <div className="col-lg-5 p-0 m-0 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i> <FontAwesomeIcon className="text-warning " icon={faMapMarkerAlt} /></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className="email">
                                    <i> <FontAwesomeIcon className="text-warning " icon={faEnvelopeOpen} /></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div className="phone">
                                    <i> <FontAwesomeIcon className="text-warning " icon={faMobileAlt} /></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default RestaurantInfo;