import React from 'react'
import NavBar from "./NavBar";

export default class Header extends React.Component{
  // static contextType = ThemeContext;
  render() {
    return (
      <header>
        <div className="container mx-auto">
          <NavBar />
        </div>
      </header>
    )
  }
}