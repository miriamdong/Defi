import React, { useState } from "react";
import { Nav, Button, Alert, Form } from "react-bootstrap";
import { useAuth } from "../Auth/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UserProfile() {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			history.push("/login");
		} catch {
			setError("Failed to log out");
		}
	}

	return (
		<>
			<Nav role="navigation">
				<Form inline>
					{error && <Alert variant="danger">{error}</Alert>}
					<li>
						Signed in as:
						<a href="#login">{currentUser.email}</a>
					</li>
					<Link to="/update-profile" className="btn">
						Update Profile
					</Link>
					<Button variant="link" className="btn" onClick={handleLogout}>
						Log Out
					</Button>
				</Form>
			</Nav>
		</>
	);
}