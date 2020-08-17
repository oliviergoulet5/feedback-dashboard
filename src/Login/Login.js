import React from 'react';
import './Login.scss'

function Login() {
    return (
        <div className='modal'>
            <h1 className='client-brand'>Bob's Electronics</h1>
            <p className='fine-print'>Powered by Feedback</p>

            <form action='' method='POST'>
                <label htmlFor='username'>Username</label>
                <input name='username' type='text' /> 

                <label htmlFor='password'>Password</label>
                <input name='password' type='password' />

                <label htmlFor='remember'>Remember Me</label>
                <input name='remember' type='checkbox' />

                <input name='submit' type='submit' value='Login' />
            </form>
        </div>
    );
}

export default Login;