import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import logo from "./logo.png";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1 className="tc f3 lightest-blue">Loading...</h1>
  ) : (
    <>
      <div className="vh-25 w-25 center tc">
        <img src={logo} className="w-50 mt3" alt="logo" />
        <SearchBox onChange={(e) => setSearchField(e.target.value)} />
      </div>
      <Scroll className="vh-75 tc">
        <ErrorBoundary>
          <CardList listItems={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </>
  );
};

export default App;
