import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/nav';
import Routes from './components/routing/routes';

function App() {
  
  return (
    <Router>
      <Fragment>
      <Navbar/>
      <div className="content grid">
        <Switch>
            <Route component={Routes} />
        </Switch>
     </div>
      </Fragment>
    </Router>
    
  );
}

export default App;
