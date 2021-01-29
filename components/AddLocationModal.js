import { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";

import { createLocation } from "@/lib/db";
import { useAuth } from "@/lib/auth";
import { mutate } from "swr";

const AddLocationModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register, errors } = useForm();
  const initialRef = useRef();
  const auth = useAuth();
  const toast = useToast();

  const onCreateLocation = (values) => {
    const newLocation = {
      userId: auth.user.uid,
      createdAt: new Date().toISOString(),
      ...values,
    };
    const { id } = createLocation(newLocation);
    toast({
      title: "Location created.",
      description: "We've created your Location.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log(id);
    mutate(
      ["/api/locations", auth.user.token],
      async (data) => {
        return { locations: [...data.locations, { id, ...newLocation }] };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <Button
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: "gray.700" }}
        _active={{
          bg: "gray.800",
          transform: "scale(0.95)",
        }}
        onClick={onOpen}
      >
        {children}
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateLocation)}>
          <ModalHeader fontWeight="bold">Add Location</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Location Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Location"
                name="location"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Site Link</FormLabel>
              <Input
                placeholder="Site URL"
                name="sitelink"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} type="submit">
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddLocationModal;
