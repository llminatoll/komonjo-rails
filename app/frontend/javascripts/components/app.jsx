const React = require('react');
const Komonjo = require('../komonjo.js');
const Header = require('./header.jsx');
const Body = require('./body.jsx');
const store = Komonjo.store;
const stateExtractor = (store) => {
  return {
    channels: store.channels,
    selectedChannel: store.selectedChannel,
    messages: store.messages
  };
}

class App extends Komonjo.BaseComponent {
  constructor(props) {
    super(props);
    this.state = stateExtractor(store);
    store.on("CHANGE", () => this._onChange());
  }
  render() {
    return (
      <div>
        <Header title="komonjo"></Header>
        <Body
          selectedChannel={ this.state.selectedChannel }
          channels={ this.state.channels }
          messages={ this.state.messages }
        ></Body>
      </div>
    );
  }
  _onChange() {
    this.setState(stateExtractor(store));
  }
}

module.exports = App;