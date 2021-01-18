import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/nav';
import Routes from './components/routing/routes';
import Layout from './components/layout/layout';

function App() {
  return (
    <Router>
      <Fragment>
      <Navbar/>
      <Layout>
        <Switch>
            <Route component={Routes} />
        </Switch>
      </Layout>
      </Fragment>
    </Router>
    
  );
}

export default App;
