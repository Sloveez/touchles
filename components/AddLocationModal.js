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
import { createLocation } from "@/lib/db";

const AddLocationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register, errors } = useForm();

  const initialRef = useRef();

  const onCreateLocation = (values) => {
    createLocation(values);
  };

  return (
    <>
      <Button maxW="120px" fontWeight="medium" onClick={onOpen}>
        Add location
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
              <FormLabel>Tagline</FormLabel>
              <Input
                placeholder="Tagline"
                name="tagline"
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
