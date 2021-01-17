import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from '../Products/productList';
import ProductDetail from '../Products/productDetail';


const Routes = props => {
    return(
        <Switch>
            <Route path="/items" component={ProductList}/>
            <Route path="/items:id" component={ProductDetail}/>
        </Switch>
    )
}

export default Routes;