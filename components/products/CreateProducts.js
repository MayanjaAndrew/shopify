import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CreateProducts() {
  const [productname, setProductname] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [products, setProducts] = useState([]);

  /*useEffect(() => {
    axios.get("http://localhost:5000/products/").then((response) => {
      if (response.data.length > 0) {
        setProducts(response.data.map((product) => product.productname));
        setProductname(response.data[0].productname);
      }
    });
  });**/

  const onChangeProduct = (e) => {
    setProductname(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      productname: productname,
      description: description,
      quantity: quantity,
    };

    console.log(product);

    axios
      .post("http://localhost:5000/products/add", product)
      .then((res) => console.log(res.data));

    /*window.location = "/";**/
  };
  return (
    <div>
      <h3>CreateProducts</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/**<div>
          <label>Product:</label>
          <select
            required
            value={productname}
            onChange={(e) => onChangeProduct(e)}
          >
            {products.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div> */}
        <div>
          <label>Product:</label>
          <input
            type="text"
            required
            value={productname}
            onChange={(e) => onChangeProduct(e)}
          ></input>
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            required
            value={description}
            onChange={(e) => onChangeDescription(e)}
          ></input>
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="text"
            required
            value={quantity}
            onChange={(e) => onChangeQuantity(e)}
          />
        </div>
        <div>
          <input type="submit" value="Add to items" />
        </div>
      </form>
    </div>
  );
}
