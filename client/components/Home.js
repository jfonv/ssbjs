/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fighters: [], fighterR: {}, fighterL: {}, weaponR: {}, weaponL: {}, value: '' };
    this.populateDropdown = this.populateDropdown.bind(this);
    this.changeCharacter = this.changeCharacter.bind(this);
  }

  componentDidMount() {
    this.populateDropdown();
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

  populateDropdown() {
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
    // this.props.update();
  update() {
    // joe
  }

  changeCharacter(event) {
    // console.log('figher:', this.state.fighters[0]._id);
    this.setState({ value: event.target.value });
    const fighter = this.state.fighters.find((f) =>
      f._id === this.refs.character.values);
    console.log('figher:', fighter);
  }

  render() {
    return (
      <div>
        <h1>Go home bro</h1>
        <div>
          <select
            onClick={this.changeCharacter}
            className="form-control"
            value={this.state.value} ref="character"
          >
            {this.state.fighters.map((t) => <option key={t._id} value={t._id}>{t.name}</option>)}
          </select>
          <button onClick={this.populateDropdown}>GO</button>
        </div>
      </div>
    );
  }
}

export default Home;
