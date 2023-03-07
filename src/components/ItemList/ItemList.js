import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link, NavLink } from 'react-router-dom';


 function ItemList({product}) {
  return (
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
     
    </Card.Body>
  </Card>
  
)
}


export default ItemDetailContainer;