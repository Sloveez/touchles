import React from "react";
import {
  Flex,
  Stack,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
  useRadio,
} from "@chakra-ui/react";
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
          <Link>Locations</Link>
          <Link>Feedback</Link>
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
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink fontSize="sm">Locations</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
            <Heading color="black" mb={4}>
              Locations
            </Heading>
            <AddLocationModal>+ Add Location</AddLocationModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
