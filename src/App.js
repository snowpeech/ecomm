import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop.components";
import Header from "./components/header.component";
import SignInRegisterPage from "./pages/sign-in-register.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
