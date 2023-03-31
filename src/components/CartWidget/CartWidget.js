import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {useContext} from "react";
import cartContext from '../../context/cartContext';

function CartWidget() {
  const {cart, test} = useContext(cartContext);
  const cartCount = cart.lengt;
  return (
    <Button variant="info">
      Carrito <Badge bg="dark">{cartCount}</Badge>
    </Button>
  );
}

export default CartWidget;