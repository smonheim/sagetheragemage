import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from "./components/home";
import Contact from "./components/contact";
import Twitch from "./components/twitch";
import Blog from "./components/blog";


class Main extends Component {
  render() { 
    return (
      <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink exact to="/" >Home</NavLink></li>
          <li><NavLink to="/Twitch">Twitch</NavLink></li>
          <li><NavLink to="/Blog">Blog</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/twitch" component={Twitch} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
      </HashRouter>
    );
  }
}
 
export default Main;