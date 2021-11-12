import React,{useEffect,useState} from 'react';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getRestaurantList } from '../../redux/actions/EcommerceActions';
;
const Restaurants = () => {
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
        <div className="row  d-flex justify-content-center">
        {
            restaurant.map(restaurant =>
                <RestaurantCard restaurant={restaurant}> </RestaurantCard>)
        }
    </div>
    );
};

export default Restaurants;