import Head from "next/head";
import { Flex, Heading, Button, Text, Code, Icon } from "@chakra-ui/react";
import useSWR from "swr";

import { useAuth } from "@/lib/auth";
import { LogoIcon } from "../styles/logoicon";
import EmptyState from "@/components/EmptyState";
import LocationTableSkeleton from "@/components/LocationTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import fetcher from "@/utils/fetcher";
import LocationTable from "@/components/LocationTable";

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR("/api/locations", fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <LocationTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data ? <LocationTable locations={data.locations} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
