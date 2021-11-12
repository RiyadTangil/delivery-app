import React from 'react';
import FoodCard from '../FoodCard/FoodCard';

const OrdersBox = ({navLink}) => {
    return (
        <div id={`section-${navLink}`}>
        <h3 className="sticky-custom  text-muted bg-white">Best Loved Combo {navLink}</h3>
        {[1, 2, 3, 4, 5, 6, 7,].map(foodCard => <FoodCard></FoodCard>)}
    </div>
    );
};

export default OrdersBox;