import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header"
import NotFound from './components/NotFound'

import Photo from './features/Photo'

import './App.scss';

function App() {
  return (
    <div className="photo-app">
        <Router>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photo" />

            <Route path="/photo" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;