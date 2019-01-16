import React, { Component } from 'react';
import Root from './pages/Root'
import { Route, Switch } from 'react-router';

//Import necessary components needed for router


import './App.scss';

export const App: React.FunctionComponent = () => {

  return (
    <div>
      <Switch>

        <Route exact path="/" component={Root} />
        {/* insert route components */}
        {/* <Route component={NotFound} /> */}
      </Switch>

    </div>
  );
}


