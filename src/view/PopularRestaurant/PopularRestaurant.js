import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Restaurants from '../../Components/Restaurants/Restaurants';
import Footer from '../../Components/Footer/Footer';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
const PopularRestaurant = () => {
    return (
        <>
            <Navbar></Navbar>
            <SearchFilter title="Popular restaurants"></SearchFilter>
            <div className="px-3 pb-4">
                <Restaurants ></Restaurants>
            </div>
            <Footer></Footer>
        </>
    );
};

export default PopularRestaurant;