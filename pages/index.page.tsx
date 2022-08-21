// Modules
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Paper } from "@mantine/core";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";

// Components
import Head from "next/head";
import Home from "../components/Home";
import SignIn from "./SignIn.page";
import base from "./firebase";
import ThemeToggle from "../components/ThemeToggle";
import SetUser from "./SetUser.page";

const Index: NextPage = () => {
  const auth = base.auth;
  const [isloged] = useAuthState(auth);
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="A simple and realtime chat application"
        />
      </Head>

      <main className={styles.main}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider theme={{ colorScheme }}>
            <Paper className={styles.paper}>
              {/* Is Logged */}
              <>{isloged ? <SetUser /> : <SignIn />}</>
              {/* Theme Toggle */}
              <ThemeToggle
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
              />
            </Paper>
          </MantineProvider>
        </ColorSchemeProvider>
      </main>
    </div>
  );
};

export default Index;
