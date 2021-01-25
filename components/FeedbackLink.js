import { Flex, Link } from "@chakra-ui/react";

export default FeedbackLink = ({ locationId }) => {
  return (
    <Flex justifyContent="space-between" mb={8} width="full" mt={1}>
      <Link fontWeight="bold" fontSize="sm" href={`/p/${locationId}`}>
        Leave a comment
      </Link>
    </Flex>
  );
};
