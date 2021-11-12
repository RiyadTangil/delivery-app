import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './OnlineOrders.css'
import Scrollspy from 'react-scrollspy'
import OrdersBox from './OrdersBox';
const RestaurantVerticalNav = () => {
    const [restaurant, setRestaurant] = useState([])
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getRestaurantList());
    // }, [dispatch]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setRestaurant(data))
    }, [])
    return (
        <div className='row'>
            <div className='d-flex justify-content-between'>
                <div className="col-md-3 d-none d-md-block border-end">
                    <Scrollspy
                        className="scrollspy sticky-custom list-unstyled" items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9', 'section-10']}
                        currentClassName="isCurrent">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(navLink => {
                            return (<li ><a href={`#section-${navLink}`}><h5 >Most loved Combos</h5></a></li>)
                        })}

                    </Scrollspy>
                </div>

                <div className="col-md-9 col-sm-12 ps-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(navLink => <OrdersBox navLink={navLink}></OrdersBox>  )   }
                </div>

            </div>
        </div>
    );
};

export default RestaurantVerticalNav;