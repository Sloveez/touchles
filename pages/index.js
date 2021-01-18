import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAuth } from "../lib/auth";

const Home = () => {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Touchles!</h1>

        <p className={styles.description}>
          Current User:
          <code className={styles.code}>
            {auth.user ? auth.user.name : "None"}
          </code>
        </p>
        <div>
          {!auth.user ? (
            <button onClick={(e) => auth.signinWithGoogle()}>Sign In</button>
          ) : (
            <button onClick={(e) => auth.signout()}>Sign Out</button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
