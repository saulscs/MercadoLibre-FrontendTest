import React, { Fragment } from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../Constant /loader';
import useApi from '../../helpers/useApi';
import Price from '../../utils/price'

import "./productDetail.css"

const ProductDetail = () => {
    const {id} = useParams();
    const {value: product,error,loading} = useApi(`items/${id}`);

    if(loading) return <div classNameName="results"> <Loading/> </div> ;
    else if (error !== null) return <h3>Error</h3>;
    else {
        const {
            picture,
            title,
            condition,
            price,
            description,
            sold_quantity,
            category
        } = product.item;
        const { name, lastname } = product.author;
        return(
            <Fragment>
            <div className="results">
                <div className="product--container">
                    <div className="product">
                        <div className="product__image">
                            <img src={picture} alt={title}/>                
                        </div>
                        <div className="product__detail">
                            <span className="product__detail--sell">{condition} {sold_quantity} vendidos</span>
                            <h2 className="product__detail--name">{title}</h2>
                            <span className="product__detail--price">$159.000</span>
                            <button className="product__detail--button">Comprar</button>
                        </div>
                    </div>
                    <div  className="product__description">
                        <h2>Descripción del producto</h2>
                        <p> {description}</p>
                    </div>
                </div> 
                </div>
            </Fragment>
            
        )
    }    
}

export default  ProductDetail;