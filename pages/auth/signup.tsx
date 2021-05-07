import React, { useState } from 'react';
import Link from 'next/link';
import { firebaseClient } from '../../firebase/initFirebase'

const Auth = () => {
        const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');
    return (
        <div>
            <div>
        <br />
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={'Email'}
        />
        <input
        type={'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={'Password'}
        />
        <button
        onClick={async () => {
        await firebaseClient.auth().createUserWithEmailAndPassword(email, pass);
        window.location.href = '/';
        }}
        >
        Create account
        </button>
            </div>
            <a href="/">Go back to home page</a>
        </div>
    )
}

export default Auth;