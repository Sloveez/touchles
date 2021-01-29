import React from "react";
import { Box, Code, Link, Switch, IconButton } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";
import { Table, Tr, Th, Td } from "./Table";
import NextLink from "next/link";
import { DeleteIcon } from "@chakra-ui/icons";
import RemoveButton from "./RemoveButton";

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td>{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{"/post"}</Code>
            </Td>
            <Td>
              <Switch
                size="sm"
                colorScheme="green"
                defaultChecked={feedback.status === "active"}
              ></Switch>
            </Td>
            <Td>
              <RemoveButton feedbackId={feedback.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
