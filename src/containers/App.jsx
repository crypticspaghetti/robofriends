import { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
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
        <>
          <div className="vh-25 w-25 center tc">
            <img src={logo} className="w-50 mt3" alt="logo" />
            <SearchBox onChange={this.onSearchChange} />
          </div>
          <Scroll className="vh-75 tc">
            <CardList listItems={filteredRobots} />
          </Scroll>
        </>
      );
    }
  }
}

export default App;
