import * as React from 'react';

import { Route, Switch } from 'react-router';

// Import necessary components needed for router


import './App.scss';
import Heroes from './pages/Heroes/Heroes';

const appNus: React.FunctionComponent = () => {

  return (
    <div>
      <Switch>

        <Route exact path="/" component={Heroes} />
        {/* insert route components */}
        {/* <Route component={NotFound} /> */}
      </Switch>

    </div>
  );
};

export default appNus;


