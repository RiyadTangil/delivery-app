import React from 'react';
import RestaurantVerticalNav from '../RestaurantVerticalNav/RestaurantVerticalNav';
import Review from '../Review/Review';
import './RestaurantNavbar.css'
const RestaurantNavbar = () => {
    return (
        <div className="bg-white">
        <div className="container bg-white">

            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active primary-text" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Order online</button>
                    <button className="nav-link primary-text" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Review</button>

                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <RestaurantVerticalNav></RestaurantVerticalNav>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><Review></Review></div>
               
            </div>
        </div>
        </div>
    );
};

export default RestaurantNavbar;