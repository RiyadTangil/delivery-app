import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './VerticalNav.css'
import Scrollspy from 'react-scrollspy'
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
                        className="scrollspy sticky-custom list-unstyled" items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9' , 'section-10']}
                        currentClassName="isCurrent">
                        {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map(navLink => {
                            return (<li ><a href={`#section-${navLink}`}><h5 >Most loved Combos</h5></a></li>)
                        })}

                        {/* <li ><a href="#section-1"><h5 >Best In Biryani</h5></a></li>
                            <li ><a href="#section-2"><h5 >Recommended</h5></a></li>
                            <li ><a href="#section-3"><h5 >Most loved Combos</h5></a></li>
                            <li ><a href="#section-4"><h5 >Combos</h5></a></li>
                            <li ><a href="#section-5"><h5 >Meals</h5></a></li>
                            <li ><a href="#section-6"><h5 >Starts</h5></a></li>
                            <li ><a href="#section-7"><h5 >Main Course</h5></a></li>
                            <li ><a href="#section-8"><h5 >Rice</h5></a></li>
                            <li ><a href="#section-9"><h5 >Drink</h5></a></li> */}


                    </Scrollspy>
                </div>

                <div className="col-md-9 col-sm-12 ps-3">
                {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map(navLink => {
                        return (
                            <div id={`section-${navLink}`}>
                                <h3 className="sticky-custom  text-muted bg-white">Best Loved Combo {navLink}</h3>
                                {[1, 2, 3, 4, 5, 6, 7,].map(foodCard => <FoodCard></FoodCard>)}
                            </div>
                        )
                    })
                    }
                </div>

            </div>
        </div>
    );
};

export default RestaurantVerticalNav;