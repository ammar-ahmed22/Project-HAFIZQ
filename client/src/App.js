import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import CreateListing from './components/CreateListing';
import UpdateListing from './components/UpdateListing';
import UpdateImage from './components/UpdateImage';
import Listing from './components/Listing';

import * as api from "./functions/api";

const App = () => {

  

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={ props => <Main {...props} />}/>
          <Route  exact path="/create" render={ props => <CreateListing {...props} />}/>
          <Route exact path="/listing/:identifier" render={ props => <Listing {...props}/>}/>
          <Route exact path="/edit/:identifier" render={ props => <UpdateListing {...props} />}/>
          <Route exact path="/edit-image/:identifer" render={ props => <UpdateImage {...props} />}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
