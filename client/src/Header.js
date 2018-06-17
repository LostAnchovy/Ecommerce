import React, { Component } from 'react';
import './App.css';
import About from "./About"
import Contact from "./Contact"
import Mainbody from "./Mainbody"
import Carosuel from "./Carosuel"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark primary-color">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="basicExampleNav">
                            <ul className="navbar-nav mr-auto">
                                <Link to="/"> <li className="nav-item ">
                                    <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                                    </a>
                                </li></Link>
                                <Link to="/about"><li className="nav-item">
                                    <a className="nav-link" href="#">Merchandise</a>
                                </li></Link>
                                <Link to="/Contact"><li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li></Link>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Login | Register</a>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                    <switch>
                        <Route exact path='/' component={Mainbody} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                    </switch>
                </div>
            </Router>
        );
    }
}
export default Header;