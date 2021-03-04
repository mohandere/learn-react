import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Contact from "./pages/Contact";
import News from "./pages/News";
import Home from "./pages/Home";
import HarryPotter from "./pages/harry-potter";
import Users from "./pages/Users";


export default function Routes() {
  return (
      <main className="container mx-auto m-5 min-h-screen">
        <Switch>
          <Route exact path="/harry-potter">
            <HarryPotter />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/news">
            <News foo={'bar'}/>
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
  );
}
