import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import RestaurantInfo from '../../Components/RestaurantInfo/RestaurantInfo';
import RestaurantNavbar from '../../Components/RestaurantNavbar/RestaurantNavbar';
import RestaurantSlider from '../../Components/RestaurantSlider/RestaurantSlider';


const RestaurantDetails = () => {
    const { id } = useParams();
    return (
        <div >
           <Navbar></Navbar>
           <RestaurantInfo></RestaurantInfo>
    
           {/* <RestaurantSlider></RestaurantSlider>  */}
           <RestaurantNavbar></RestaurantNavbar>
           <Footer></Footer>
        </div>
    );
};

export default RestaurantDetails;