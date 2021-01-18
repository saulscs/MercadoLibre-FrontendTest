import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from '../products/productList';
import ProductDetail from '../products/productDetail';


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/items" component={ProductList}/>
            <Route exact path="/items/:id" component={ProductDetail}/>
        </Switch>
    )
}

export default Routes;