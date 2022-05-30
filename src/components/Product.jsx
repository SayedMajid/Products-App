import React, { useEffect, useState } from "react";
import styles from "./Product.module.css"

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  const [data, setData] = useState([])

  let url = "http://localhost:8080/products"
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
    .catch(console.error("Error"))
  },[])

  // console.log(data)
  
  return (
    <div className={styles.prodBox}>
      {data.map((el) => (
        <div>
          <img src={el.imageSrc} alt="" />
          <p>Title : {el.title}</p>
          <p>Category : {el.category}</p>
          <p>For : {el.gender}</p>
          <p>Price : {el.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
