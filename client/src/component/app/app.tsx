import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from '../../pages/Main/Main';
import Profile from '../../pages/Profile/Profile';
import SignIn from '../../pages/Sign-in/Sign-in';
import Tests from '../../pages/Tests/Tests';
import Header from '../header/header';
import "./app.scss";
import Story from '../../pages/Story/Story';

const App: React.FC = () => {

  return (
      <Router>
        <Header />
        <Switch>
          <div className="container">
            <Route path="/main" exact component={Main}/>
            <Route path="/sign-in" exact component={SignIn}/>
            <Route path="/story" exact component={Story}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/profile/:id" exact component={Profile}/>
            <Route path="/tests" exact component={Tests}/>
          </div>
        </Switch>
      </Router>
  )
}

export default App;

// const f = (num: number, many: number, arr: number[]) => {
//   for(let i = 0;i < arr.length;i++){
//     let res = 0;
//       for(let j = 0;j < many; j++){
        
//       }

//       if(res === num) {
//         return res
//       } else {
//         return res
//       }

//   }
// };

// f(150, 3, [50, 60, 70, 50, 50]);