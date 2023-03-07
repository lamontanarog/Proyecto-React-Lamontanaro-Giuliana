import './App.css';
import NavBar from './components/NavBar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={ItemListContainer} />
      <Route path="/categoria/:id" element="Hola" />
      <Route path="/products/:id" element="Hola" />
      <Route path="/cart" element="Hola" />
    </Routes>
  </BrowserRouter>
  <ItemListContainer />
  </>
);
}

export default App;
