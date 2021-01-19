import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box backgroundColor="white" p={8} borderRadius="4px">
      <Heading size="md">Add locations as your business grows.</Heading>
      <Text>Start today and grow with us!</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
