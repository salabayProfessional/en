import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from '../../pages/Main/Main';
import Profile from '../../pages/Profile/Profile';
import SignIn from '../../pages/Sign-in/Sign-in';
import Tests from '../../pages/Tests/Tests';
import HeaderX from '../header/headerX';
import "./app.scss";
import Story from '../../pages/Story/Story';
import { Container } from 'reactstrap';

const App: React.FC = () => {

  return (
      <Router>
        <HeaderX />
        <Switch>
          <Container fluid>
            <Route path="/main" exact component={Main}/>
            <Route path="/sign-in" exact component={SignIn}/>
            <Route path="/story" exact component={Story}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/profile/:id" exact component={Profile}/>
            <Route path="/tests" exact component={Tests}/>
          </Container>
        </Switch>
      </Router>
  )
}

export default App;