import React from 'react';

import Restaurants from '../Restaurants/Restaurants';
import SectionTitle from '../SectionTitle/SectionTitle';

const PopularSection = () => {

    return (
        <section style={{ backgroundColor: "#faf3f4" }}>
            <div className="container">
                <SectionTitle> {"Popular Restaurants"} </SectionTitle>
                <Restaurants ></Restaurants>

            </div>
        </section>
    );
};

export default PopularSection;