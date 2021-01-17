import React from 'react';
import Loading from '../Constant /loader';
import ProductListItem from './productListItem';
import useApi from '../../helpers/useApi';

const ProductList = props => {
    function useQuery () {
        return new URLSearchParams(props.location.search);
    }
    const query = useQuery();
    const q = query.get("q");
    const {value: products, error,loading} = useApi(`items?q=${q}`);


    
    
    if(loading) return <Loading/>;
    else if (error !== null) return <h3>Error</h3>;
    else {
        return(
            <div className="results">
               {!products.items.length ? (
                   <h3>Vacio</h3>
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
        );
    }
    
}

export default ProductList;