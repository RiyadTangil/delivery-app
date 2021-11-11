import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import CategoriesCard from './CategoriesCard';
import './Categories.css'

const Categories = () => {
    return (
        <section>
            <div className="container">
                <SectionTitle> {"Browse Categories"}  </SectionTitle>
                <div className="d-flex justify-content-center">
                    <div className="w-75 ">
                        <div className="row ">
                            {
                                [1, 3, 5].map(category => <CategoriesCard></CategoriesCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>




        </section>
    );
};

export default Categories;