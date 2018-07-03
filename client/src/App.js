import React, { Component } from 'react';
import './App.css';
import About from "./About/About";
import Contact from "./Contact/Contact";
import Mainbody from "./Mainbody/Mainbody";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login"
import Register from "./Register/Register";
import EventPage from "./EventPage/EventPage";
import AdminDash from "./AdminDash/AdminDash";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Mainbody} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/event' component={EventPage} />
              <Route path='/admin' component={AdminDash} />
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
