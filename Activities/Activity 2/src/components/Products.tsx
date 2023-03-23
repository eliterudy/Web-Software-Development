import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const ProductCard = ({ product, index }: any) => {
  return (
    <Card className="flex-1" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={product.thumbnail}
        style={{ height: 200 }}
        className="contain"
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProducts(response.products);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(products);
  return (
    <div className="d-flex flex-column ">
      <h1 className="fw-bold my-5 text-center">PRODUCT CATELOG</h1>
      <div className="d-flex col-12 position-relative justify-content-center flex-wrap gap-2">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
