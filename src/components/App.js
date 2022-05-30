import '../App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Header";
import NavBarComp from "./NavBarComp";
import EasyMode from "./EasyMode";
import About from "./About";
import WordofTheDay from "./WordofTheDay";

function App() {
  return (
    <>
      <Header />
      <NavBarComp />
      <Switch>
        <Route exact path='/'>
          <EasyMode />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path='/wotd'>
          <WordofTheDay />
        </Route>
      </Switch>
    </>
  );
}

export default App;
