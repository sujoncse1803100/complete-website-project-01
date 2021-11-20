import React, { useContext, useState } from 'react';
import login from '../../images/login.png';
import googleIcon from '../../images/google.png';
import './Login.css'
import { handleGoogleSignIn, initializedLoginFramework } from './LoginManager';
import { UserContext } from './../../App';
import { useHistory, useLocation } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


initializedLoginFramework()

const Login = () => {

    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        photoURL: '',
        isLoggedIn: false,
        password: '',
        success: '',
        error: '',
    });

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirects) => {
        setUserLoggedIn(res);
        setUser(res);
        if (redirects) {
            // history.replace(from);
        }
    }

    const googleSignedIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }


    return (
        <div>
            <h2 className="text-center">Email : {user.email}</h2>
            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1 text-center">
                    <h3 className="text-center">Login</h3>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="standard-basic"
                                label="Email Or Username"
                                variant="standard"
                                type="text"
                            />
                            <TextField
                                id="standard-basic"
                                label="Password"
                                variant="standard"
                                type="password"
                            />
                            <div >
                                <p style={{ fontSize: '0.5rem' }} className="text-danger text-start">forgot password ?</p>
                            </div>
                            <button
                                className="btn bg-light  rounded-pill"
                            >
                                Login
                            </button>
                        </Box>
                        <div>
                            <h6 className="text-center  mt-3 mb-3">or</h6>
                            <button
                                className="btn bg-light  rounded-pill"
                                onClick={googleSignedIn}
                            >
                                <img className="me-5 googleIcon" src={googleIcon} alt="" />
                                Continue with Google
                            </button>
                        </div>
                    </div>
                </div >
                <div className="col-md-6">
                    <img src={login} className="img-fluid " alt="" />
                </div>

            </main >
        </div >
    );
};

export default Login;