import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h3>ListProducts</h3>
      {products.map((product) => {
        return (
          <div>
            <h3>Users</h3>
            <div>{product.productname}</div>
            <div>{product.description}</div>
            <div>{product.quantity}</div>
          </div>
        );
      })}
    </div>
  );
}
