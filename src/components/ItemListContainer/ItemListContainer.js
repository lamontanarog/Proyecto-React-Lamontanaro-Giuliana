import { react, useState, useEffect } from "react";
import axios from "axios";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
      axios
    .get("https://fakestoreapi.com/products") // Llamamos a la api y nos responde una promise
      .then((res) => {
          setProducts(res.data)}) //Despues de llamar a la api, pasamos la respuesta a formato json y guardamos el mismo en products mediante setProducts
          .catch( (error) => {
              console.log(error); //Hacemos un catch para que nos arroje cualquier error que pueda ocurrir
          })
          console.log("products", products); //Verificamos que nos este trayendo los productos 
  }

  return (
      <div>Hola</div>
  );
}

export default ItemListContainer;
