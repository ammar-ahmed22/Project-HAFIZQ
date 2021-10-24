import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import CreateListing from './components/CreateListing';
import UpdateListing from './components/UpdateListing';
import UpdateImage from './components/UpdateImage';
import Listing from './components/Listing';



const App = () => {

  

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route  exact path="/create" component={CreateListing}/>
          <Route exact path="/listing/:identifier" component={Listing}/>
          <Route exact path="/edit/:identifier" component={UpdateListing}/>
          <Route exact path="/edit-image/:identifier" component={UpdateImage}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
