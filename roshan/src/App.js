import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import Auth from './pages/auth/auth.component'
import {auth,createUserProfileDocument} from './firebase/firebase.util';


import { directive } from '@babel/types';

const HatsPage=()=>(
  <div>
    <h1>hats Page</h1>
  </div>

); 

class App extends React.Component {

  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsuscribeFromAuth=null;  

  componentDidMount(){
    this.unsuscribeFromAuth=auth.onAuthStateChanged(async user=>{
      if(user){
      const userRef=await createUserProfileDocument(user);
      this.setState({currentUser: user});
      
      userRef.onSnapshot(snapshot=>{
        this.setState({
          
          id:snapshot.id,
          ...snapshot.data()
        },()=>{
          console.log(this.state);
        });
      });
      }

     console.log(this.state);

    })

  }


  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          
        <Route  path='/auth' component={Auth} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/' component={Homepage} />
      
      
        
        </Switch>
      </div>
    );
  }


}

export default App;
