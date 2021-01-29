import Head from "next/head";
import { Flex, Heading, Button, Text, Code, Icon } from "@chakra-ui/react";
import useSWR from "swr";

import { useAuth } from "@/lib/auth";
import { LogoIcon } from "../styles/logoicon";
import EmptyState from "@/components/EmptyState";
import FeedbackTable from "@/components/FeedbackTable";
import FeedbackTableSkeleton from "@/components/FeedbackTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import fetcher from "@/utils/fetcher";
import FeedbackTableHeader from "@/components/FeedbackTableHeader";

const MyFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/feedback", user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
};

export default MyFeedback;
