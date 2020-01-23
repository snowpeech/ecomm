import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop.components";
import Header from "./components/header.component";
import SignInRegisterPage from "./pages/sign-in-register.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {

          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            }
         );
        });
      }
      this.setState({ currentUser: userAuth }); //sets currentUser: null
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
