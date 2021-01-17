import React from "react";

import {formatPrice} from '../utils/formatPrice'

const price = ({ price: { amount, decimals }, showDecimals }) => { 
    return (
        <span> $ {formatPrice(amount)}
                {showDecimals && <span>{decimals}</span>}
        </span>
    )
    
}

export default price;