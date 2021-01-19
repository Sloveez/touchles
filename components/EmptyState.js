import React from "react";
import { Heading, Flex, Text, Button } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";
import AddLocationModal from "./AddLocationModal";

const EmptyState = () => (
  <DashboardShell>
    <Flex
      backgroundColor="white"
      width="100%"
      p={16}
      borderRadius="4px"
      justify="center"
      direction="column"
      align="center"
    >
      <Heading size="md" mb={2}>
        No locations added.
      </Heading>
      <Text mb={4}>Welcome, add your first location.</Text>
      <AddLocationModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
