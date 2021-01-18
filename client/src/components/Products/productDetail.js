import React, { Fragment } from 'react';
import {useParams} from 'react-router-dom';
import { Helmet } from "react-helmet";
import Loading from '../shared/loader/loader';
import useApi from '../../hooks/useApi';
import Price from '../../utils/price';
import BreadCrubs from '../shared/breadCrubs/breadCrubs';
import BtnPrimary from '../shared/buttons/buttons'

import "./productDetail.css"

const ProductDetail = () => {
    const {id} = useParams();
    const {value: product,error,loading} = useApi(`items/${id}`);

    if(loading) return <div className="results"> <Loading/> </div> ;
    else if (error !== null) return <h3>Producto no encontrado</h3>;
    else {
        const {
            picture,
            title,
            condition,
            price,
            description,
            sold_quantity,
            
        } = product.item;
        const { name, lastname } = product.author;
        
        return(
            <Fragment>
                <Helmet>
                    <title>{title}</title>
                    <meta name="author" content={`${name}-${lastname}`}/>
                    <meta name="description" content={`${description}`}/>
                </Helmet>
                <BreadCrubs breadCrumbs={product.categories}/>
                <div className="results">
                    <div className="product--container">
                        <div className="product">
                            <div className="product__image">
                                <img src={picture} alt={title}/>                
                            </div>
                            <div className="product__detail">
                                <span className="product__detail--sell">
                                    {condition} {sold_quantity} vendidos
                                </span>
                                <h2 className="product__detail--name">{title}</h2>
                                <span className="product__detail--price"> <Price price={price} showDecimals /></span>
                                <BtnPrimary title="Comprar"/>
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