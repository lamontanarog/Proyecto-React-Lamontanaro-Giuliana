import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartWidget() {
  return (
    <Button variant="info">
      Carrito <Badge bg="dark">9</Badge>
    </Button>
  );
}

export default CartWidget;