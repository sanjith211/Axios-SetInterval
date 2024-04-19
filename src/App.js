import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [product, setProducts] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    try {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => setProducts(res.data.products));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  console.log("length", product.length);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setId((prevIndex) => (prevIndex + 1) % product.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [product]);

  console.log("index", id);

  var currentProduct = product[id];

  console.log("current", currentProduct);

  return (
    <div className="App">
      {product.length > 0 ? (
        <div>
          <div>
            <strong>Name:</strong> {currentProduct.title}
          </div>
          <div>
            <img src={currentProduct.images} alt={"Text"} />
          </div>
          <div>
            <strong>Category:</strong> {currentProduct.category}
          </div>
          <div>
            <strong>Price:</strong> {currentProduct.price}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
