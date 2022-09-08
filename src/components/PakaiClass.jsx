import React from "react";

class PakaiClass extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>Realtime CLOCK</h1>
        <hr />
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default PakaiClass;
