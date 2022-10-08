import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Password, SettingsSystemDaydreamOutlined, Storefront } from '@mui/icons-material'
import { Link } from "react-router-dom"
//import { auth } from "./firebase"
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



function Login() {

    // const history = useHistory();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        console.log("SignIn Clicked: ", email, password);
        // console.log(auth, createUserWithEmailAndPassword, );
        signInWithEmailAndPassword(auth, email, password)
            .then((authResp) => {
                console.log("Resp:", authResp);
                navigate('/');
            }).catch((error) => alert(error.message));
        // auth
        //     .signInWithEmailAndPassword(email, password)
        //     .then(auth => {
        //         // 
        //     })
        //     .catch(error => alert(error.message))
    }


    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         if (auth) {
        //             history.push('/');
        //         }
        //     })
        //     .catch(error => alert(error.message))
    }


    return (
        <div>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <Storefront className='login__logoImage' fontSize='large' />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    {`By Signing-in you agree to the eShop Website Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.`}
                </p>

                <button className='login_registerButton' onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login
