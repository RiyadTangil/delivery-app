import React from 'react';

const SearchFilter = ({ title }) => {
    return (
        <div className="pt-5 mt-5 px-3">
            <div className="row">

                <div className="col-md-4">
                    <div className="d-flex justify-content-start">
                        <div>
                            <h5 className="text-muted">{title}</h5>
                            <p>7 Restaurants found</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">

                    <div className=" d-flex align-items-center justify-content-end">
                        <small>filter by</small>

                        <div className="mx-2">
                            <select className="form-select " id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected> Japanese </option>
                                <option value="1">Japanese</option>
                                <option value="2">Italian</option>
                                <option value="3">American</option>
                                <option value="4">Thai</option>
                                <option value="5">North Indian</option>

                            </select>
                        </div>


                        <div className="mx-2">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected> All Categories </option>
                                <option value="1">Veg Starters</option>
                                <option value="2">Spaghettis</option>
                                <option value="3">Soup</option>
                                <option value="4">Pizza</option>
                            </select>
                        </div>

                        <div>
                            <button className="btn btn-secondary">Filter</button>

                        </div>

                    </div>
             
             
             
                </div>



            </div>
        </div>
    );
};

export default SearchFilter;