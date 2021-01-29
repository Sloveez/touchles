import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import AddLocationModal from "./AddLocationModal";

const FeedbackTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink fontSize="sm">Feedback</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading color="black" mb={4}>
        My Feedback
      </Heading>
    </Flex>
  </>
);

export default FeedbackTableHeader;
