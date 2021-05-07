import React, { useRef, useState } from "react"
import { Form, Button, Nav, Alert } from "react-bootstrap"
import FirebaseAuth from '../../components/Auth/FirebaseAuth'
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = FirebaseAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
		<>
			<Nav>
				<Form inline onSubmit={handleSubmit} id="SignUpForm">
					{" "}
					{error && <Alert variant="danger">{error}</Alert>}
					<Form.Group id="email">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" ref={emailRef} required />
					</Form.Group>
					<Form.Group id="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" ref={passwordRef} required />
					</Form.Group>
					<Form.Group id="password-confirm">
						<Form.Label>Password Confirmation</Form.Label>
						<Form.Control
							type="password"
							ref={passwordConfirmRef}
							placeholder="At least 6 characters"
							required
						/>
					</Form.Group>
					<Button disabled={loading} className="btn" type="submit">
						Sign Up
					</Button>
					<Link to="/login" className="btn">
						Log In
					</Link>
				</Form>
			</Nav>
		</>
	);
}
