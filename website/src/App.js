import './Style.scss';

import ContactPage from './Components/ContactPage'
import HomePage from './Components/HomePage'
import WoodshopPage from './Components/WoodshopPage'
import Sidebar from './Components/Sidebar';
import ResumePage from './Components/ResumePage';

import { Container } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <section className="sidebar-section">
          <Sidebar />
        </section>

        <section className="content-section">
          <Container>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/woodshop">
                <WoodshopPage />
              </Route>
              <Route path="/resume">
                <ResumePage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </Container>
        </section>
      </div>
    </Router>
  );
}

export default App;
