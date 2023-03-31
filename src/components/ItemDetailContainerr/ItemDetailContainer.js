import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import { Link } from "react-router-dom";

export default function ItemDetailContainer({ product, ItemDetail }) {
  return (
    <>
      <div className="Father">
        <Card bg="light" variant="light" style={{ width: "18rem"}} key={product.id}>
          <Card.Img className="ImgCards" variant="top" src={product.image} />
          <Card.Body >
            <Card.Title> {product.title}</Card.Title>
            <Card.Subtitle>${product.price}</Card.Subtitle>
            <Link to={`/products/${product.id}`}>
              <Button bg="danger" variant="dark">
                Comprar
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
    );
}
