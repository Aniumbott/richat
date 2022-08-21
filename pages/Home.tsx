import React from "react";
import { Button } from "@mantine/core";
import { signOut } from "firebase/auth";
import base from "../pages/firebase";
import { userAgent } from "next/server";

function Home(props: any) {
  const { user, setUser } = props;
  const { auth, db } = base;
  function logOut() {
    signOut(auth);
  }
  return (
    <div>
      <h1>WELLCOME ABORT !!! {user.username}</h1>
      <Button color="red" onClick={logOut} className="log-out">
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
