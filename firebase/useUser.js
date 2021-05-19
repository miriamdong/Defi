import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import { removeUserCookie, setUserCookie, getUserFromCookie } from "./userCookies";
import axios from "axios";
// import { auth, generateUserDocument } from "./initFirebase";

// initFirebase()

const mapUserData = (user) => {
  const { uid, email, xa, displayName, photoURL } = user;
  return {
    id: uid,
    email,
    name: displayName,
    photoURL,
    token: xa,
  };
};

const useUser = () => {
  const [user, setUser] = useState();
  const [currentPic, setCurrentPic] = useState();
  const router = useRouter();

  const current = firebase.auth().currentUser;
  if (current) {
    console.log(current.photoURL);
  }

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        router.push("/auth");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are both kept up to date
    // auth.onAuthStateChanged(async (userAuth) => {
    //   const user = await generateUserDocument(userAuth);
    //   this.setState({ user });
    // });

    const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        const userData = mapUserData(user);
        console.log({ userData });
        setUserCookie(userData);
        // debugger
        setUser(userData);
        setCurrentPic(firebase.auth().currentUser.photoURL);
        const userObject = {
          authId: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        axios
          .post("https://defidapp.herokuapp.com/users", userObject)
          .then((res) => {})
          .catch((err) => {
            console.log("error saving user", err);
          });
      } else {
        removeUserCookie();
        setUser();
      }
    });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      router.push("/");
      return;
    }
    setUser(userFromCookie);

    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout };
};

export { useUser, mapUserData };
