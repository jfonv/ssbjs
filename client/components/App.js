/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <h1>my new app page</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/fighters">Fighters</Link></li>
          <li><Link to="/weapons">Weapons</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
