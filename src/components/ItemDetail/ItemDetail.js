import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style.css";

function ItemDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="Father">
        <Card key={product.id} style={{ width: "30rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price}</Card.Text>

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

export default ItemDetail;
