import React from 'react';
import catImg from '../../images/category/cat-1.jpg'

const CategoriesCard = () => {
    return (
        <div className="col-md-4 my-2  ">
            <div className=" category-card d-flex justify-content-center align-items-center flex-column border border-2">
                <div className="div px-4 pt-4 pb-1 " style={{width:"50%"}} >
                    <img src={catImg} className="img-fluid" alt="categories" />
                </div>
                <h4  className="text-muted pb-3">Pizza</h4>
            </div>
        </div>
    );
};

export default CategoriesCard;