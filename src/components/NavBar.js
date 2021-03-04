import { Link } from "react-router-dom";

import React, { Component } from "react";

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.countRef = React.createRef();
  }

  menuItemClicked = e => {
    this.countRef.current += 1;
    // console.log("NavBar -> menuItemClicked -> count", this.countRef.current);
  }

  componentWillUnmount() {
    // Send count to google analytics on
  }

  render() {

    return (
      <nav>
        <ul className="flex mb-4">
          <li className="pr-2">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="pr-2">
            <Link to="/harry-potter">Harry Potter</Link>
          </li>
          <li className="pr-2">
            <Link to="/users">Users</Link>
          </li>
          <li className="pr-2">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="pr-2">
            <Link to="/news" onClick={this.menuItemClicked}>
              News
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
