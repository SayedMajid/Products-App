import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import { Flex, Grid, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const toast = useToast();

  const getData = () => {
    axios
      .get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      .then((res) => setData(res.data));
  };

  const addProduct = () => {
    const payload = {
      title,
      category,
      gender,
      imageSrc: "https://picsum.photos/seed/picsum6/420/260",
      price,
    };

    axios
      .post("http://localhost:8080/products", payload)
      .then((res) => console.log(res))
      .then(() => getData());

    toast({
      title: "Product Added",
      description: `${title} was added worth Rs.${price}`,
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });

    setTitle("");
    setCategory("");
    setGender("");
    setPrice("");
  };

  const incPage = () => {
    setPage((prev) => prev + 1);
  };

  const decPage = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    getData();

    return () => {};
  }, [page, limit]);

  console.log(data);

  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      w="80%"
      m="auto"
      flexDirection="column"
    >
      <Flex
        justifyContent="space-between"
        w="100%"
        p="12px"
        bgGradient="linear(to-l, #c31432, #240b36)"
        justify="center"
        alignItems="center"
      >
        <Text fontSize="28px" fontStyle="sans serif" color="white">
          Products App
        </Text>
        <AddProduct
          title={title}
          setTitle={setTitle}
          category={category}
          setCategory={setCategory}
          gender={gender}
          setGender={setGender}
          price={price}
          setPrice={setPrice}
          addProduct={addProduct}
        />
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} p="12px 12px">
        {data?.map((el) => (
          <Product {...el} key={el.id} />
        ))}
      </Grid>
      <Pagination
        page={page}
        incPage={incPage}
        decPage={decPage}
        setPage={setPage}
      />
    </Flex>
  );
};

export default Products;
