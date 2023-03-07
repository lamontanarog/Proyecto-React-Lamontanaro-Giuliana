import { react, useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {id} = useParams();

  if (id) {
      var url = `https://fakestoreapi.com/products/category/${id}`
  }  else{
      var url = "https://fakestoreapi.com/products"
  };
  useEffect(() => {
    getProducts();
  }, [id]);

  const getProducts = () => {
      axios
    .get(url) // Llamamos a la api y nos responde una promise
      .then((res) => {
          setProducts(res.data)}) //Despues de llamar a la api, pasamos la respuesta a formato json y guardamos el mismo en products mediante setProducts
          .catch( (error) => {
              console.log(error); //Hacemos un catch para que nos arroje cualquier error que pueda ocurrir
          })
          console.log("products", products); //Verificamos que nos este trayendo los productos 
  }
  return (
      <ItemList products={products}/>
  );
}

export default ItemListContainer;
