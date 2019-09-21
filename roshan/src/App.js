import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'


import { directive } from '@babel/types';

const HatsPage=()=>(
  <div>
    <h1>hats Page</h1>
  </div>

); 

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
 
      <Route  path='/shop' component={ShopPage} />
      <Route  path='/' component={Homepage} />
     
      
      </Switch>
    </div>
  );
}

export default App;
