import React, { Fragment } from 'react';
import Loading from '../shared/loader/loader';
import ProductListItem from './productListItem';
import useApi from '../../hooks/useApi';
import BreadCrubs from '../shared/breadCrubs/breadCrubs';

const ProductList = props => {
    function useQuery () {
        return new URLSearchParams(props.location.search);
    }
    const query = useQuery();
    const q = query.get("q");
    const {value: products, error,loading} = useApi(`items?q=${q}`);

    if(loading) return <div className="results"> <Loading/> </div> ;
    else if (error !== null) return <h3>Error</h3>;
    else {
        return(
            <Fragment>
                <BreadCrubs breadCrumbs={products.categories}/>
                <div className="results">
                {!products.items.length ? (
                    <h2>Vacio</h2>
                ) : (
                    products.items.map((product,index) => (
                        <ProductListItem
                            key={product.id}
                            index={index}
                            product={product}
                        />
                    ))
                )}
                </div> 
            </Fragment>
            
        );
    }
    
}

export default ProductList;