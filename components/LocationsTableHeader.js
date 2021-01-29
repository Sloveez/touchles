import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import AddLocationModal from "./AddLocationModal";

const LocationsTableHeader = () => (
  <>
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
  </>
);

export default LocationsTableHeader;
