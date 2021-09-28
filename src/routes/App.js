import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import MyBooks from "../containers/MyBooks";
import Wishlist from "../containers/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/mybooks" component={MyBooks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
