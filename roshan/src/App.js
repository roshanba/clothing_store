import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { directive } from '@babel/types';

const HatsPage=()=>(
  <div>
    <h1>hats Page</h1>
  </div>

); 

function App() {
  return (
    <div>
      <Switch>
      <Route  path='/' component={Homepage} />
      <Route  path='/hats' component={HatsPage} />
      </Switch>
    
    </div>
  );
}

export default App;
