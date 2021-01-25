import { Box } from "@chakra-ui/react";

const Feedback = ({ author, text, createdAt, provider }) => {
  return (
    <Box>
      {author} - {text}
    </Box>
  );
};

export default Feedback;
