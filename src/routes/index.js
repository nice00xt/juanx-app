import React from 'react';
import { Router } from '@reach/router';
import LayoutContent from '../components/layout';
import Home from '../containers/home';


export const Routes = () => {
  return (
    <Router>
      <LayoutContent path="/">
        <Home path="/" />
      </LayoutContent>
    </Router>
  )
}

export default Routes;