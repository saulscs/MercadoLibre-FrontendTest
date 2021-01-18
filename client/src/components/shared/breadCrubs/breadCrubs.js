import React from 'react';
import { Link } from "react-router-dom";
import "./breadCrubs.css"

const BreadCrumbs = ({ breadCrumbs }) => {
    let categories;
    if(breadCrumbs){
        categories = breadCrumbs.map(breadCrumb => {
            return <Link className="breadcrumbs__categories" to={`/items?q=${breadCrumb}`  }> <span key={breadCrumb.id} >{breadCrumb}</span></Link>
        })
    }
    return(
        <div className="breadcrumbs">
            {categories}
        </div>
    )
}
    

export default BreadCrumbs;