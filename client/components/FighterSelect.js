/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

import React from 'react';

class FighterSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fighters: [], weapons: [], fighterR: {},
                   fighterL: {}, weaponR: {}, weaponL: {}, value: '',
                   fight: {} };
    this.populateFighterDropdown = this.populateFighterDropdown.bind(this);
    this.populateWeaponDropdown = this.populateWeaponDropdown.bind(this);
    this.submitCharacterWeapon = this.submitCharacterWeapon.bind(this);
  }

  componentDidMount() {
    this.populateFighterDropdown();
    this.populateWeaponDropdown();
  }

  populateFighterDropdown() {
    const url = './fighters/';
    fetch(url)
    .then((r) =>
      r.text().then(j => {
        const resp = JSON.parse(j);
        this.setState({ fighters: resp.fighters });
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
    console.log('health', fighterL.health);
    fighterL.currHealth = fighterL.health;
    fighterR.currHealth = fighterR.health;
    fighterR.right = true;
    fighterL.right = false;
    const fight = { fighterL, fighterR, weaponL, weaponR };
    this.setState({ fight });
    this.props.updateFight(fight);
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

FighterSelect.propTypes = {
  updateFight: React.PropTypes.func,
};

export default FighterSelect;
