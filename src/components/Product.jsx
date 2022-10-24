import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Product = ({ id, title, category, gender, imageSrc, price }) => {
  const name = title;

  return (
    <Stack p="10px" spacing={4} boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;' >
      <Image src={imageSrc} />
      <Flex justify="space-between">
        <Text fontSize="20px">{`${name}`}</Text>
        <Tag
          size="md"
          w="fit-content"
          colorScheme={
            gender === "male"
              ? "blue"
              : gender === "female"
              ? "red"
              : "blackAlpha"
          }
        >
          <TagLabel textTransform="Capitalize">{gender}</TagLabel>
        </Tag>
      </Flex>
      <Heading fontSize="18px" textTransform="Capitalize">
        {category}
      </Heading>
      <Box
        border="1px solid gray"
        w="fit-content"
        p="2px 8px"
        borderRadius="4px"
        fontWeight="700"
      >
        Rs. {price}
      </Box>
    </Stack>
  );
};

export default Product;
