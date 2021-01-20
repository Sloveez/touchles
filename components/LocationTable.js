import React from "react";
import { Box } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";
import { Table, Tr, Th, Td } from "./Table";

const LocationTable = ({ locations }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Location Name</Th>
          <Th>Tag Line</Th>
          <Th>Created</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {locations.map((location) => (
          <Box as="tr" key={location.location}>
            <Td fontWeight="medium">{location.location}</Td>
            <Td>{location.tagline}</Td>
            <Td>{format(parseISO(location.createdAt), "PPpp")}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default LocationTable;
