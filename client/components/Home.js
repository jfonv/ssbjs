/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

import React from 'react';
import FighterSelect from './FighterSelect';
import Fight from './Fight';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', fight: null };
    this.updateFight = this.updateFight.bind(this);
  }

  componentDidMount() {

  }

  updateFight(fight) {
    this.setState({ fight });
  }
  // this.props.update();
  update() {
    // joe
  }

  render() {
    let fighterSelect = false;
    if (this.state.fight === null) {
      fighterSelect = <FighterSelect updateFight={this.updateFight} ref="fighterSelectComponent" />;
    } else {
      console.log('before fight object', this.state.fight);
      fighterSelect = <Fight ref="fightComp" fightObject={this.state.fight} />;
    }
    return (
      <div>
        <h1>Go home bro</h1>
        <table>
          <tbody>
            <tr>
              <td>
                {fighterSelect}
              </td>
              <td>

              </td>
            </tr>
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
