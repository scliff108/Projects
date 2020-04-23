import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Home';
import Exercises from './Exercises';
import Workouts from './Workouts';
import Err from './Err';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Boxer Strong</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item eventkey={1} href="/">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item eventkey={2} href="/exercises">
                <Nav.Link as={Link} to="/exercises">Exercises</Nav.Link>
              </Nav.Item>
              <Nav.Item eventkey={3} href="/workouts">
                <Nav.Link as={Link} to="/workouts">Workouts</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/workouts" component={Workouts} />
            <Route component={Err} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Navigation;