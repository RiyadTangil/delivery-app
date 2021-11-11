import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import RestaurantInfo from '../../Components/RestaurantNavbar/RestaurantInfo/RestaurantInfo';
import RestaurantNavbar from '../../Components/RestaurantNavbar/RestaurantNavbar';
import RestaurantSlider from '../../Components/RestaurantSlider/RestaurantSlider';

import Review from '../../Components/Review/Review';

const RestaurantDetails = () => {
    const { id } = useParams();
    return (
        <div style={{backgroundColor: '#F3F4F7'}}>
           <Navbar></Navbar>
           <RestaurantInfo></RestaurantInfo>
           {/* <RestaurantSlider></RestaurantSlider>  */}
           <RestaurantNavbar></RestaurantNavbar>
           <Footer></Footer>
        </div>
    );
};

export default RestaurantDetails;