import { useRef, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useAuth } from "@/lib/auth";
import { getAllFeedback, getAllLocations } from "@/lib/db-admin";
import Feedback from "@/components/Feedback";

import { createFeedback } from "@/lib/db";

export async function getStaticProps(context) {
  const locationId = context.params.locationId;
  const { feedback } = await getAllFeedback(locationId);

  return {
    props: {
      initialFeedback: feedback,
    },
    unstable_revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { locations } = await getAllLocations();
  const paths = locations.map((location) => ({
    params: {
      locationId: location.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

const LocationFeedback = ({ initialFeedback }) => {
  const auth = useAuth();
  const router = useRouter();
  const commentEl = useRef(null);
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      locationId: router.query.locationId,
      text: commentEl.current.value,
      createdAt: new Date().toISOString(),
      provier: auth.user.provider,
      status: "pending",
      rating: 5,
    };

    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="700px"
      margin="0 auto"
    >
      <Box as="form" onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor="comment">Comment</FormLabel>
          <Input ref={commentEl} id="comment"></Input>
          <Button type="submit" fontWeight="medium" mt={2}>
            Add Comment
          </Button>
        </FormControl>
      </Box>
      {allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
};

export default LocationFeedback;
