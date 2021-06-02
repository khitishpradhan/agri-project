import React from "react";
import { Route, Switch } from "react-router-dom";

import Crops from "./components/Crops/Crops";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import CropData from "./components/CropData/CropData";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/crops" render={() => <Crops />} />
        <Route exact path="/crops/:name" render={() => <CropData />} />
        <Route exact path="/about" render={() => <About />} />
      </Switch>
    </div>
  );
};

export default App;
