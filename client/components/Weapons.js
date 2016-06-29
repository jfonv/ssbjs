import React from 'react';

export default class Weapons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weapons: 'JOE' };
    this.submitWeapon = this.submitWeapon.bind(this);
  }

  submitWeapon() {
    const name = this.refs.weaponName.value;
    const power = this.refs.weaponPower.value; // change value to text
    const image = this.refs.weaponImageUrl.value;
    const url = './weapons/new';
    // call database
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ name, power, image }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    }).then((response) => {
      response.text().then(() => {
        // const section = JSON.parse(responseText);
        // name = section.quantity;
        // power = section.type; // change value to text
        // price = section.price;
        // this.setState({ quantity, type, price });
        this.update();
      });
    });
  }

  update() {
    this.refs.weaponName.value = '';
    this.refs.weaponPower.value = '';
    this.refs.weaponImageUrl.value = '';
  }

  render() {
    return (
      <div>
        <h1>Design Your Weapons!</h1>
        <div>
          <label>Weapon Name: </label>
          <input type="Text" ref="weaponName" />
        </div>
        <div>
          <label>Power: </label>
          <input type="Number" ref="weaponPower" />
        </div>
        <div>
          <label>Image URL: </label>
          <input type="Text" ref="weaponImageUrl" />
        </div>
        <div>
          <button onClick={this.submitWeapon}>Submit</button>
        </div>
      </div>
    );
  }
}
