import { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <CardList listItems={robots} />
      </div>
    );
  }
}

export default App;
