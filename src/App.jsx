import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./src/db.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>App</div>
      <div className="product-container">
        {products.map((p) => {
          return <Product key={p.id} product={p} />;
        })}
      </div>
    </>
  );
}

export default App;
