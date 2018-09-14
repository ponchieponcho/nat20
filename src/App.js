import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Home}/>
    </div>
  </Router>
);

const Home = () => {
  return (
    <div>
    <h2>Home</h2>
    <GoogleLoginButton/>
  </div>
  );
}

class GoogleLoginButton extends React.Component {
  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  render() {
    return <div className="g-signin2" data-onsuccess={this.onSignIn}></div>;
  }
}


export default App;