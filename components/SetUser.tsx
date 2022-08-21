// Import Modules
import React, { useEffect } from "react";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { useState } from "react";
import { serverTimestamp } from "@firebase/firestore";

// Import Components
import Home from "../pages/Home";
import base from "../pages/firebase";

// Main function
function SetUser() {
  const { auth, db } = base;
  // User State
  const currentUser =
    auth.currentUser != null
      ? auth.currentUser
      : {
          email: "",
          uid: "",
          displayName: "",
          timestamp: "",
          themeColor: "",
        };
  const [user, setUser] = useState({
    gmail: currentUser.email,
    id: currentUser.uid,
    username: currentUser.displayName,
    timestamp: serverTimestamp(),
    themeColor: "#4c6ef5",
  });

  // Get from DB
  useEffect(() => {
    const getdoc = async () => {
      const usr = await getDoc(doc(db, "users", currentUser.uid));
      if (usr.exists()) {
        setUser({
          gmail: usr.data().gmail,
          id: usr.data().id,
          username: usr.data().username,
          timestamp: usr.data().timestamp,
          themeColor: usr.data().themeColor,
        });
        // console.log("yo");
      } else {
        const addUser = async () => {
          const newUser = await setDoc(doc(db, "users", user.id), user);
        };
        addUser();
        // console.log("user added");
      }
    };
    getdoc();
  }, []);

  return (
    <div>
      <Home user={user} setUser={setUser} />
    </div>
  );
}

export default SetUser;
