import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from "./Navbar";
import Login from './Login'
import Signup from './Signup';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const App = () =>{
  return(
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>

    </>
  );
};

export default App;