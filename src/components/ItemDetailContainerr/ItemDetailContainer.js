import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ItemDetailContainer({ products }) {
  return (
    <>
      {products.map((product) => (
        <div className="Father">
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title> {product.title}</Card.Title>
              <Card.Text>{product.description} </Card.Text>
              <Card.Subtitle>{product.price}</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}
