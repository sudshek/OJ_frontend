import React, { Component } from 'react';
import { Button, Form, Grid, Image, Message, Segment, Dropdown, Select, Dimmer, Icon,Responsive } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
export default class Header1 extends Component {
    render() {
        return (
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link">Index</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/login'} className="nav-link">login</Link>
                  </li>
                </ul>
              </div>
            </nav> <br/>
            <h2>Welcome to React CRUD Tutorial</h2> <br/>
            </div>
        )
    }
}