import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../../firebase';
import { login } from '../../features/userSlice'
import { Button } from '@material-ui/core';
import "./Login.css";

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="gmail logo" />
                <Button
                    onClick={signIn}
                    variant="contained"
                    color="primary"
                >Login</Button>
            </div>
        </div>
    )
}

export default Login
