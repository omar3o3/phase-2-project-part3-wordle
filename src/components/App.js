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

  let randomWords = require('random-words');
  let solutionList = randomWords({exactly: 25, maxLength: 7});
  let filteredSolution = solutionList.find(word => word.length === 5);
  console.log(filteredSolution);


  return (
    <div>
      <Header />
      <NavBarComp />
      <Switch>
        <Route exact path='/'>
          <EasyMode filteredSolution = {filteredSolution} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path='/wotd'>
          <WordofTheDay />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
