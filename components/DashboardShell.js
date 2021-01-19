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

const DashboardShell = ({ children }) => {
  const auth = useAuth();

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
          <Link>Menus</Link>
        </Stack>
        <Flex display="block" alignItems="center">
          <Link pr={4}>Account</Link>
          <Avatar size="xs" src={auth.user.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" height="100vh" p={8}>
        <Flex maxWidth="800px" w="100%" ml="auto" mr="auto" direction="column">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink fontSize="sm">Locations</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading color="black" mb={4}>
            Locations
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
