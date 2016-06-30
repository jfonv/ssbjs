/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-template */

import React from 'react';

export default (props) => {
  // const health = props.health * 1;
  console.log(props);
  const currHealth = props.currHealth.toString() + '%';
  return (
    <span>
      <div>
        <div className="progress">
          <div
            className="progress-bar progress-bar-success progress-bar-striped"
            role="progressbar" aria-valuenow={currHealth} aria-valuemin="0"
            aria-valuemax={props.health} style={{ width: currHealth }}
          >
            <span className="sr-only">40% Complete (success)</span>
          </div>
        </div>
        <div>
          Health: {props.currHealth}
        </div>
        <div>
          <h3>Name: {props.name}</h3>
        </div>
        <div>
          <img src={props.image} role="presentation" />
        </div>
        <div>
          <h3>Weapon: {props.weapon}</h3>
          <img src={props.image} role="presentation" />
        </div>
      </div>
    </span>);
};
