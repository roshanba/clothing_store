import React from 'react';

import './form.styles.scss';

const Form =({handleChange,label,...otherProps})=>(
   <div className='group'>

    <input className='form-input' onChange={handleChange}{...otherProps}/>

    {
        label ? 
       ( <label className={`${otherProps.value.lenght ?'shrink':''}form-input-label`}>
           {label}
        </label>
       )
        : null
       
    }
    </div> 

);


export default Form;
