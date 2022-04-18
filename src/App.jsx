import { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList listItems={robots} />
      </div>
    );
  }
}

export default App;
