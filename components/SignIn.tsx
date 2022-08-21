// Import Modules
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { Button } from "@mantine/core";
import { Card } from "@mantine/core";
import { Text } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons";

// Import Components
import base from "../pages/firebase";
import logo from "../public/images/rc-logo.png";

// Main function
function SignIn() {
  const { auth } = base;

  // Sign-In function
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch(() => {});
  }

  return (
    <div className="sign-in">
      <div className="sign-in-box">
        <Card shadow="sm" withBorder>
          <Card.Section className="sign-in-logo">
            <Image
              src={logo}
              className="sign-in-logo-img"
              alt="Next-Todo-Logo"
              height={300}
              width={300}
            />
          </Card.Section>
          <Text
            align="justify"
            size="lg"
            color="dimmed"
            className="sign-in-text"
          >
            <b>RICHAT</b> : A fast, easy and realtime chat application, Where
            people meet and talk/discuss/debate on anything.
          </Text>

          <Button
            leftIcon={<IconBrandGoogle size={18} />}
            variant="filled"
            onClick={signInWithGoogle}
            fullWidth
            size="lg"
            className="sign-in-button"
          >
            Sign In with Google
          </Button>
        </Card>
      </div>
      <style>
        {`
        .sign-in{
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .sign-in-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 25rem;
            transition: all 0.2s ease-in-out;
            overflow: hidden;
            border-radius: 2rem;
        }
        .sign-in-box:hover {
            box-shadow: 0px 0px 20px 5px #4c6ef566;
          }
        
        .sign-in-button {
          margin-top: 1rem;
          border-radius: 100px;
        }
        
        .sign-in-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        .sign-in-text{
          margin: 0rem 1rem;
          padding: 1rem 0rem;
        }

            `}
      </style>
    </div>
  );
}

export default SignIn;
