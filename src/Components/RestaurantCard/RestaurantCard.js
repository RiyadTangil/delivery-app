import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faMapMarkerAlt, faMobileAlt, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="col-md-4 my-2">
            <Link className="text-decoration-none" to={'/restaurants/' + restaurant.id}>

                <div className="card " >
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{restaurant.name}</h5>

                        <p className="text-muted">Review  <span className="text-warning" > <FontAwesomeIcon icon={faStarHalfAlt} /> <FontAwesomeIcon icon={faStarHalfAlt} /><FontAwesomeIcon icon={faStarHalfAlt} /> <FontAwesomeIcon icon={faStarHalfAlt} /></span> </p>
                    </div>
                    <ul className="list-group list-group-flush border-0">
                        <li className="list-group-item border-0 text-muted"><span className="mx-2"> <FontAwesomeIcon icon={faMapMarkerAlt} /></span> {restaurant.address.street}</li>
                        <li className="list-group-item border-0 text-muted" ><span className="mx-2"> <FontAwesomeIcon icon={faMobileAlt} /></span> {restaurant.phone}</li>
                        <li className="list-group-item text-muted"><span className="mx-2"> <FontAwesomeIcon icon={faLink} /></span> {restaurant.phone}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link primary-text text-decoration-none">open now</a>

                    </div>
                </div>

            </Link>
        </div>
    );
};

export default RestaurantCard;