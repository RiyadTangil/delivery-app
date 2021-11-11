import React from 'react';

import Restaurants from '../Restaurants/Restaurants';
import SectionTitle from '../SectionTitle/SectionTitle';

const PopularSection = () => {

    return (
        <section style={{ backgroundColor: "#faf3f4" }}>
            <div className="container">
                <SectionTitle> {"Popular Restaurants"} </SectionTitle>
                <Restaurants ></Restaurants>
                <div className="d-flex justify-content-center pt-3">
                    <button type="button" className="btn px-5  primary-btn">VIEW ALL</button>
                </div>
            </div>
        </section>
    );
};

export default PopularSection;