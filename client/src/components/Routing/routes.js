import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from '../Products/productList';
import ProductDetail from '../Products/productDetail';


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/items" component={ProductList}/>
            <Route exact path="/items/:id" component={ProductDetail}/>
        </Switch>
    )
}

export default Routes;