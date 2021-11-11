import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Hero.css'

const HeroSection = () => {
    return (
   
            <div className="  hero-container">
                <div className="text-center text-white">

                    <h1>Scopri i posti più belli dell'italia</h1>
                    <h5>Vuoi un pasto delizioso, ma non lo consegneremo mai caldo e gustoso.</h5>
                 
                    <div className="d-flex  justify-content-center">
                    <div className="search-container py-4">
                        <form className="d-flex ">
                            <input className="form-control  px-md-5" type="search" placeholder="Search by location and restaurant name" aria-label="Search"></input>
                            <button className="btn primary-btn d-flex  px-md-5 py-md-4 " ><span className="text-white  px-md-3 px-md-1"><FontAwesomeIcon icon={faSearch} /></span> Search</button>
                        </form >
                    </div>
                    </div>
                    <h5 className="fw-light"><span className="text-decoration-underline  pr-2">Browse popular restaurant</span> Or <span className="pl-2 text-decoration-underline ">Recently added</span></h5>
                </div>
         
        </div>
    );
};

export default HeroSection;