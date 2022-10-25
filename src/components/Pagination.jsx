import { Button, Select, HStack } from "@chakra-ui/react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import React from "react";

const Pagination = ({
  page,
  incPage,
  decPage,
  setPage,
  changeLimit,
  total,
  limit,
}) => {
  const btnDisable = Math.ceil(total.length / limit);

  return (
    <HStack spacing={2} w="max-content" m=" 20px auto">
      <Button
        size="md"
        w="80px"
        colorScheme="teal"
        variant="outline"
        onClick={() => setPage(1)}
        disabled={page === 1}
      >
        First
      </Button>
      <Button
        size="md"
        leftIcon={<HiArrowLongLeft />}
        colorScheme="orange"
        variant="outline"
        disabled={page === 1}
        onClick={() => decPage()}
      >
        Prev
      </Button>
      <Select w="100px" onChange={(e) => changeLimit(e)}>
        <option value={"3"}>3</option>
        <option value={"6"}>6</option>
        <option value={"9"}>9</option>
      </Select>
      <Button
        size="md"
        rightIcon={<HiArrowLongRight />}
        colorScheme="orange"
        variant="outline"
        onClick={() => incPage()}
        disabled={btnDisable === page}
      >
        Next
      </Button>
      <Button
        size="md"
        w="80px"
        colorScheme="teal"
        variant="outline"
        onClick={() => setPage(btnDisable)}
        disabled={btnDisable === page}
      >
        Last
      </Button>
      F
    </HStack>
  );
};

export default Pagination;
