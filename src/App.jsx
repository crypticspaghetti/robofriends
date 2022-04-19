import { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import logo from "./logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
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
    if (this.state.robots.length === 0) {
      return <h1 className="tc f3 lightest-blue">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <img src={logo} className="w-25 mt3" alt="logo" />
          <SearchBox onChange={this.onSearchChange} />
          <CardList listItems={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
