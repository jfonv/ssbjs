/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import React from 'react';
import FighterComp from './FighterComp';

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fight: this.props.fightObject };
    // this.populateFighterDropdown = this.populateFighterDropdown.bind(this);
  }

  componentWillMount() {
    console.log('state', this.state);
    console.log('props', this.props);
  }

  // this.props.update();
  damage() {
    // joe
    console.log('props', this.props);
    const fight = this.state.fight;
    console.log('props', this.props);
    fight.fighterL.currHealth -= 20;
    console.log('props', this.props);
    this.setState({ fight });
    console.log('props', this.props);
  }

  render() {
    return (
      <span>
        <table>
          <tbody>
            <tr>
              <td>
                <FighterComp
                  totalHealth={this.state.fight.fighterL.health}
                  currHealth={this.state.fight.fighterL.currHealth}
                  name={this.state.fight.fighterL.name}
                  image={this.state.fight.fighterL.image}
                  weapon={this.state.fight.weaponL.name}
                  weaponimg={this.state.fight.weaponL.image}
                  isRight={this.state.fight.fighterL.right}
                />
              </td>
              <td>
                <FighterComp
                  totalHealth={this.state.fight.fighterR.health}
                  currHealth={this.state.fight.fighterR.currHealth}
                  name={this.state.fight.fighterR.name}
                  image={this.state.fight.fighterR.image}
                  weapon={this.state.fight.weaponR.name}
                  weaponimg={this.state.fight.weaponR.image}
                  isRight={this.state.fight.fighterR.right}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.damage} />
      </span>
    );
  }
}

export default Fight;
