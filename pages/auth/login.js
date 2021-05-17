import FirebaseAuth from "../../components/Auth/FirebaseAuth";
import React, { useRef, useState } from "react";
import { firebaseClient } from "../../firebase/initFirebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <div>
        <br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} />
        <input
          type={"password"}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder={"Password"}
        />
        <button
          onClick={async () => {
            await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
            window.location.href = "/";
          }}>
          Log in
        </button>
      </div>
      <FirebaseAuth />
      <a href="/">Go back to home page</a>
    </div>
  );
};

export default Auth;
