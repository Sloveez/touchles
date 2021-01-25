import Head from "next/head";
import { Flex, Heading, Button, Text, Code, Icon } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { LogoIcon } from "../styles/logoicon";

const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('touchles-auth')) {
                window.location.href = "/dashboard"
              }
            `,
          }}
        />
        <title>Touchles</title>
      </Head>

      <LogoIcon />

      {auth.user ? (
        <>
          <Button as="a" href="/dashboard">
            View Dashboard
          </Button>
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        </>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGoogle()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
