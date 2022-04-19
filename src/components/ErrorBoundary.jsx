import { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasErrors: true,
    });
  }

  render() {
    return this.state.hasErrors ? (
      <h1>An Error Has Occurred</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
