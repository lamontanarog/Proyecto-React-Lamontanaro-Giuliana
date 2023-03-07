
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element="Hola" />
      <Route path="/categoria/:id" element="Hola" />
      <Route path="/products/:id" element="Hola" />
      <Route path="/cart" element="Hola" />

    </Routes>
  </BrowserRouter>
);
}

export default App;
