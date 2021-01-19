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
        <title>Touchles</title>
      </Head>

      <LogoIcon />

      <div>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signinWithGoogle()}>
            Sign In
          </Button>
        )}
      </div>
    </Flex>
  );
};

export default Home;
