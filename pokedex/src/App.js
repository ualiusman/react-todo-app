import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pokedex from "./containers/pokedex";
import AppNavigator from "./components/AppNavigator";
export default function App(){
  return (
    <Router>
      <AppNavigator/>
      <Routes>
      <Route exact path="/" element={ <Pokedex />} />
      </Routes>
    </Router>
  )
}