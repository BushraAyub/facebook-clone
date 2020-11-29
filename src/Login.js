import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn =() => {
    auth.signInWithPopup(provider)
    .then((result) => {
    dispatch ({
    type: actionTypes.SET_USER,
    user: result.user,
    });
})
    .catch((error) => alert(error.message))
    };
     return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="data:image/png;base64,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" 
              
                alt="" />
                <img 
                src="data:image/png;base64,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"
                alt=""
                />
            </div>
            <Button type= "submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    );
    }

export default Login;
