import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './components/Routing/routes';

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
