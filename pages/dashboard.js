import Head from "next/head";
import { Flex, Heading, Button, Text, Code, Icon } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { LogoIcon } from "../styles/logoicon";
import EmptyState from "@/components/EmptyState";

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return "Loading...";
  }

  return <EmptyState />;
};

export default Dashboard;
