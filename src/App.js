import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom"
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = (props) => <h2>Hi Users! {props.match.params.userName} </h2>;

class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* The corresponding component will show here if the current URL matches the path */}
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/:userName" component={Users} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
