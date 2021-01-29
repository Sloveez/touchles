import Head from "next/head";
import { Flex, Heading, Button, Text, Code, Icon } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { LogoIcon } from "../styles/logoicon";
import { GoogleIcon } from "@/styles/GoogleIcon";

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
        <Button
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          leftIcon={<GoogleIcon />}
          mt={4}
          size="lg"
          _hover={{ bg: "gray.100" }}
          _active={{
            bg: "gray.100",
            transform: "scale(0.95)",
          }}
          onClick={(e) => auth.signinWithGoogle()}
        >
          Sign In with Google
        </Button>
      )}
    </Flex>
  );
};

export default Home;
