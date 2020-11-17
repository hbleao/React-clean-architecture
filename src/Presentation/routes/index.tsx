import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export type Props = {
  makeLogin: React.FC;
};

const Router = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;