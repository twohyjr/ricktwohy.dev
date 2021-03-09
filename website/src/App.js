import './App.css';

import ContactPage from './Components/ContactPage'
import HomePage from './Components/HomePage'
import WoodshopPage from './Components/WoodshopPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/woodshop">
            <WoodshopPage />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
