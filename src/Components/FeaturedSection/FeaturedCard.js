import React from 'react';

const FeaturedCard = () => {
    return (
        <div className="col-md-3  my-1" >
            <div className="shadow-lg  card-content">
                <div className="card border-0  bg-dark Featured-card text-white">
                    <img src="https://www.teahub.io/photos/full/253-2538486_slider3-restaurant-food-pic-hd.jpg" className="card-img " alt="restaurant eating img"></img>
                    <div className="card-img-overlay d-flex  justify-content-start align-items-end">
                        <div className="flex flex-column">
                            <h3 className=" ">Thai</h3>
                            <h5 className=" fw-light">1 Restaurant</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;