import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import Price from '../../utils/price'
import freeShipping from '../../assets/ic_shipping.png'
import "./productListItem.css"

const ProductListItem = ({
        product:{location, title, price, picture, id, free_shipping}
    }) => {

    return(
        <Fragment>
            <article className="productCard">
                <div className="productCard__description">
                    <Link to={`/items/${id}`}>
                        <div className="productCard__image">
                            <img src={picture} alt={title}/>
                        </div>
                    </Link>
                    <div className="productCard__detail">
                        <div className="productCard__price">
                            <Price price={price}/>
                            {free_shipping && (
                                <img src={freeShipping} alt="free-shipping"/>
                            )}
                        </div>
                        <div>
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>
                <div className="productCard__address">
                    <span>{location}</span>
                </div>
            </article>
        </Fragment> 
    )
}

export default ProductListItem;