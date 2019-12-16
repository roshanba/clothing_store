import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.util';

import './sign-up.styles.scss';


class SignUp extends React.Component{
    
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault;
        
    }

    render(){
        const{displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account </h2>
                <span>Singup with your email and password</span>
                <form className='sign-up-form' onSubmit='{this.handleSubmit}'>
                    <FormInput 
                        type='text' 
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    

                    <FormInput 
                        type='email' 
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    

                    <FormInput 
                        type='password' 
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    
                    <FormInput 
                        type='password' 
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='confirmPassword'
                        required
                    />
                    
                </form>

                <CustomButton type='submit'>Sign Up</CustomButton>

            </div>
        )
    }
}

export default SignUp;