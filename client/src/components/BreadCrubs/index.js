import React from 'react';

import "./breadCrubs.css"

const BreadCrubs = () => {
    return(
        <div className="breadcrumbs">
            <span className="breadcrumbs__categories">
                Electrónica,Audio y Video
            </span>
            <span className="breadcrumbs__categories">
              <b>Audio</b>  
            </span>
        </div>
    )
}

export default BreadCrubs;