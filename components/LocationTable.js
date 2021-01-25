import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";
import { Table, Tr, Th, Td } from "./Table";
import NextLink from "next/link";

const LocationTable = ({ locations }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Location Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Created</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {locations.map((location) => (
          <Box as="tr" key={location.location}>
            <Td fontWeight="medium">{location.location}</Td>
            <Td>{location.sitelink}</Td>
            <Td>
              <NextLink
                href="/p/[locationId]"
                as={`/p/${location.id}`}
                passHref
              >
                <Link>View Feedback</Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(location.createdAt), "PPpp")}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default LocationTable;
