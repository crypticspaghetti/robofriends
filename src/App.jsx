import { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import logo from "./logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <img src={logo} className="w-25 mt3" alt="logo" />
        <SearchBox onChange={this.onSearchChange} />
        <CardList listItems={filteredRobots} />
      </div>
    );
  }
}

export default App;
