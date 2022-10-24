import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const AddProduct = ({
  title,
  setTitle,
  category,
  setCategory,
  gender,
  setGender,
  price,
  setPrice,
  addProduct,
}) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="blackAlpha"
        variant="outline"
        color="white"
      >
        Add Product
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDirection="column" gap="18px">
              <Box>
                <FormLabel>Product Name</FormLabel>
                <Input
                  placeholder="Enter Product Name"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select Category"
                  required
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="pant">Pant</option>
                  <option value="shirt">Shirt</option>
                  <option value="jeans">Jeans</option>
                </Select>
              </Box>
              <RadioGroup value={gender} onChange={setGender}>
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="blue" value="male">
                    Male
                  </Radio>
                  <Radio colorScheme="pink" value="female">
                    Female
                  </Radio>
                  <Radio colorScheme="gray" value="unisex">
                    Unisex
                  </Radio>
                </Stack>
              </RadioGroup>
              <Box>
                <FormLabel>Enter price</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="₹" />
                  <Input
                    type="number"
                    placeholder="Enter Price"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </InputGroup>
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              colorScheme="green"
              onClick={() => addProduct()}
              disabled={
                title === "" || category === "" || gender === "" || price === ""
              }
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
