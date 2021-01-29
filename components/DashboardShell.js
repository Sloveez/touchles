import React from "react";
import NextLink from "next/link";
import { Flex, Stack, Link, Avatar, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { useAuth } from "@/lib/auth";
import AddLocationModal from "./AddLocationModal";

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        alignItems="stretch"
        backgroundColor="white"
        justifyContent="space-between"
        px={8}
        py={4}
      >
        <Stack
          spacing={4}
          isInline
          justifyContent="flex-start"
          alignItems="center"
          display="block"
          align="center"
        >
          <AddIcon />
          <NextLink href="/dashboard" passHref>
            <Link>Locations</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link href="/feedback">Feedback</Link>
          </NextLink>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          {user && (
            <Button variant="ghost" mr={2} onClick={() => signout()}>
              Log out
            </Button>
          )}
          <Avatar size="xs" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" height="100vh" p={8}>
        <Flex maxWidth="800px" w="100%" ml="auto" mr="auto" direction="column">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
