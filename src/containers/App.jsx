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
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc f3 lightest-blue">Loading...</h1>
    ) : (
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

export default App;
