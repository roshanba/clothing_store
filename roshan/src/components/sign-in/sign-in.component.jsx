import React from 'react';
import './sign-in.styles.scss';

import  Form from '../form/form.component';
import  CustomButton from '../button/button.component';

import {signInWithGoogle} from '../../firebase/firebase.util';

class SignIn extends React.Component{
  
    constructor(props){
        super(props);
        
        this.state={
        email:'',
        password:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChange=e=>{
        const{name,value}=e.target;
        this.setState({[name]:value});

    }




    render(){
        return(
            <div className="sign-in">
                <h2>I already have a acccount</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <Form name="email"  value={this.state.email} onChange={this.handleChange} placeholder="email" required />
                    
                    <Form name="password"  value={this.state.password} onChange={this.handleChange} placeholder="pssword" type='password' required/>
                   
                    <CustomButton type="Submit" >Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} >{''}Sign In with Google {''} </CustomButton>

                </form>
            </div>
        );
    }

}

export default SignIn;