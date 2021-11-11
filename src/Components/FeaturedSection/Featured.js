import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FeaturedCard from './FeaturedCard';
import './Featured.css'

const Featured = () => {
    return (
        <section>
            <div className="container">


                <SectionTitle>
                    {"Featured Cuisines"}
                </SectionTitle>
                <div className="row">

                    {
                        [1, 2, 3, 4].map(featured => <FeaturedCard></FeaturedCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Featured;