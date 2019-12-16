import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';

const Header=({currentUser})=>(

    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        
        <div className="options">
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            {
                currentUser?
                <Link className='option' onClick={()=>auth.signOut()}>Sign Out</Link>
                :
                <Link className='option' to='/auth'>Sign IN</Link>

            }
        </div>
    </div>

)


export default Header;