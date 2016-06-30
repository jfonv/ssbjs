/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fighters: [], weapons: [], fighterR: {},
                   fighterL: {}, weaponR: {}, weaponL: {}, value: '' };
    this.populateFighterDropdown = this.populateFighterDropdown.bind(this);
    this.populateWeaponDropdown = this.populateWeaponDropdown.bind(this);
    this.submitCharacterWeapon = this.submitCharacterWeapon.bind(this);
  }

  componentDidMount() {
    this.populateFighterDropdown();
    this.populateWeaponDropdown();
  }

  submitFighter() {
    // const name = this.refs.fighterName.value;
    // const image = this.refs.fighterImageUrl.value;
    // const url = './fighters/new';
    // console.log('submitting fighter');
    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify({ name, image }),
    //   headers: { 'Content-Type': 'application/json' },
    //   credentials: 'same-origin',
    // }).then((response) => {
    //   response.text().then(() => {
    //     // const section = JSON.parse(responseText);
    //     // name = section.quantity;
    //     // power = section.type; // change value to text
    //     // price = section.price;
    //     // this.setState({ quantity, type, price });
    //     this.update();
    //   });
    // });
  }

  populateFighterDropdown() {
    const url = './fighters/';
    fetch(url)
    .then((r) =>
      r.text().then(j => {
        const resp = JSON.parse(j);
        this.setState({ fighters: resp.fighters });
        console.log('this is the state:', this.state.fighters);
      })
    );
  }

  populateWeaponDropdown() {
    const url = './weapons/';
    fetch(url)
    .then((r) =>
      r.text().then(j => {
        const resp = JSON.parse(j);
        this.setState({ weapons: resp.weapons });
        console.log('this is the state:', this.state.weapons);
      })
    );
  }
    // this.props.update();
  update() {
    // joe
  }

  submitCharacterWeapon() {
    const fighterL = this.state.fighters.find((f) => {
      if (f._id === this.refs.fighter1.value) {
        return f;
      }
      return false;
    });
    const weaponL = this.state.weapons.find((w) => {
      if (w._id === this.refs.weapon1.value) {
        return w;
      }
      return false;
    });
    const fighterR = this.state.fighters.find((f) => {
      if (f._id === this.refs.fighter2.value) {
        return f;
      }
      return false;
    });
    const weaponR = this.state.weapons.find((w) => {
      if (w._id === this.refs.weapon2.value) {
        return w;
      }
      return false;
    });
    this.setState({ fighterL, fighterR, weaponL, weaponR });
    console.log(fighterL, fighterR, weaponL, weaponR);
  }

  render() {
    const fighterSelect = { width: '220px' };
    return (
      <div>
        <h1>Go home bro</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <span className={fighterSelect}>
                  <h3>Select Fighter 1</h3>
                  <select className="form-control" ref="fighter1">
                    {this.state.fighters.map((t) =>
                      <option key={t._id} value={t._id}>{t.name}</option>)}
                  </select>
                  <select className="form-control" ref="weapon1">
                    {this.state.weapons.map((t) =>
                      <option key={t._id} value={t._id}>{t.name}</option>)}
                  </select>
                </span>
              </td>
              <td>
                <span className={fighterSelect} />
              </td>
              <td>
                <span className={fighterSelect}>
                  <h3>Select Fighter 2</h3>
                  <select className="form-control" ref="fighter2">
                    {this.state.fighters.map((t) =>
                      <option key={t._id} value={t._id}>{t.name}</option>)}
                  </select>
                  <select className="form-control" ref="weapon2">
                    {this.state.weapons.map((t) =>
                      <option key={t._id} value={t._id}>{t.name}</option>)}
                  </select>
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <button onClick={this.submitCharacterWeapon}>GO</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
