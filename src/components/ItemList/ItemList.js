import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import ItemDetailContainer from "../ItemDetailContainerr/ItemDetailContainer";

function ItemList({ products }) {
return (
    <CardGroup>
    <Row xs={2} md={3} className="g-1">
        {products.map((product) => (
        <ItemDetailContainer product={product} />
        ))}
    </Row>
    </CardGroup>
);
}
export default ItemList;
