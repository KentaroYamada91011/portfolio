import React, { Component } from 'react';
import './ToDo.css';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import posed from 'react-pose'
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import './ToDo.css';

const props = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}
const Nav = posed.div(props)

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[],
      nextId: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1500);
  }

  render() {
    return (
      <div>
        <Nav className="nav" pose={this.state.isVisible ? 'visible' : 'hidden'} >
          <ul className="navbar">
            <li className="navbar__item"><Link className="navbar__link" to="/">home</Link></li>
            <li className="navbar__item"><Link className="navbar__link" to="/about">about</Link></li>
            <li className="navbar__item"><Link className="navbar__link" to="/work">work</Link></li>
            <li className="navbar__item"><Link className="navbar__link" to="/contact">contact</Link></li>
          </ul>
        </Nav>
      </div>
    );
  }

}

export default ToDo;
