import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "src/pages/Home";
import Playlist from "src/pages/Playlist";
import Artist from "src/pages/Artist";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/playlist/:id" exact component={Playlist} />
      <Route path="/artist/:id" exact component={Artist} />
    </Switch>
  );
}
