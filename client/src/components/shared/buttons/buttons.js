import React from 'react'
import "./buttons.css"

 const BtnPrimary = ({title}) => {
    return(
        <button  
            type="submit" 
            className="product__detail--button">
                {title}
        </button>
    )
}

export default BtnPrimary;