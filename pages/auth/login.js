import FirebaseAuth from '../../components/Auth/FirebaseAuth'
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

const Auth = () => {
    return (
        <div>
            <div>
                <FirebaseAuth />
                <p><a href="/">Go Home</a></p>
            </div>
        </div>
    )
}

export default Auth;