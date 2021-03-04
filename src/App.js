import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";
import ThemeContext from './libs/theme-context'

import React, {Component} from 'react'

export default class App extends Component {
  
  state = {
    theme: 'light'
  }
  toggleTheme = (e) => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light'
    })
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <button
            className="float-right bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={this.toggleTheme}>
            {this.state.theme === 'light' ? '☀' : '🌙️'}
          </button>
          <ThemeContext.Provider value={this.state.theme}>
            <Header/>
            <hr/>
            <Routes/>
            <hr/>
            <Footer/>
          </ThemeContext.Provider>
        </Router>
      </div>
    )
  }
}