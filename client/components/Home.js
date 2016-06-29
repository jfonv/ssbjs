/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fighters: [], fighterR: {}, fighterL: {}, weaponR: {}, weaponL: {} };
    this.populateDropdown = this.populateDropdown.bind(this);
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
    .then(r => r.json())
    .then(j => {
      console.log('this is the j', j);
      this.setState({ fighters: j });
    });
    // this.props.update();
  }

  update() {
    // this.refs.fighterName.value = '';
    // this.refs.fighterImageUrl.value = '';
  }

  render() {
    return (
      <div>
        <h1>Go home bro</h1>
        <div>
          <select className="form-control" ref="type">
              {this.state.fighters.map((t) => <option key={t._id}>{t.name}</option>)}
          </select>
          <button onClick={this.populateDropdown}>GO</button>
        </div>
      </div>
    );
  }
}

export default Home;
