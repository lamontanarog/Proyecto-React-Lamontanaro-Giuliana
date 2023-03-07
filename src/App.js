import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer title={"Vintage Golden Shop"} />}
        />
        <Route
          path="/categoria/:id"
          element={<ItemListContainer title={"Vintage Golden Shop"} />}
        />
        <Route path="/products/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
