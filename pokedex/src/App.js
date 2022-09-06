import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pokedex from "./containers/pokedex";

export default function App(){
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={ <Pokedex />} />
      </Routes>
    </Router>
  )
}