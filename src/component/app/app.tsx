import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import About from '../../pages/About/About';
import Main from '../../pages/Main/Main';
import Profile from '../../pages/Profile/Profile';
import SignIn from '../../pages/Sign-in/Sign-in';
import Tests from '../../pages/Tests/Tests';
import Header from '../header/header';
import "./app.scss";

const App: React.FC = () => {

  return (
      <Router>
        <Header />
        <Switch>
          <div className="container">
            <Route path="/main" component={Main}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/about" component={About}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/tests" component={Tests}/>
          </div>
        </Switch>
      </Router>
  )
}

export default App;
