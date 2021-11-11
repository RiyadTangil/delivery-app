import React from 'react';
import './sectionTitle.css'
const SectionTitle = ({children}) => {
    return (
        <div className="section-title">
            <h2>{children? children :"section Title"}</h2>
        </div>
    );
};

export default SectionTitle;