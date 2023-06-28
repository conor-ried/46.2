import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

const App = ({ dogs }) => {
  return (
    <div>
      <h1>React Router Dog Finder</h1>
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>
        <Route path="/dogs/:name">
          <DogDetails dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
};

export default App;
