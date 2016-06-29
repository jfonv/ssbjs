import React from 'react';

class Fighters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.submitFighter = this.submitFighter.bind(this);
  }

  submitFighter() {
    const name = this.refs.fighterName.value;
    const image = this.refs.fighterImageUrl.value;
    const url = './fighters/new';
    console.log('submitting fighter');
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ name, image }),
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
    this.refs.fighterName.value = '';
    this.refs.fighterImageUrl.value = '';
  }

  render() {
    return (
      <div>
        <h1>Be a fighter!</h1>
        <div>
          <label>Fighter Name: </label>
          <input type="Text" ref="fighterName" />
        </div>
        <div>
          <label>Image URL: </label>
          <input type="Text" ref="fighterImageUrl" />
        </div>
        <div>
          <button onClick={this.submitFighter}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Fighters;
