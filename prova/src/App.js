import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const isItemInCart = (itemId) => {
    const itemInCart = cart.find((item) => item.id === itemId);
    return !!itemInCart;
  };
  const handleAddToCart = (product) => {
    const itemId = product.id;
    if (isItemInCart(itemId)) {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home cart={cart} handleAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home({ handleAddToCart }) {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data); 
      });
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (category === "all") {
      setSearchResults(products);
    } else {
      const filteredProducts = products.filter((product) =>
        product.category === category
      );
      setSearchResults(filteredProducts);
    }
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.products);
      });
  }, [searchInput]);

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>Amazon Products</h1>
        <div className="search-and-cart">
          <form id="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="search-input"
              placeholder="Cerca prodotti..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit"  onClick={handleSearch}>
              Cerca
            </button>
            <div className="select-categories">
            <p>cerca per categoria</p>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="all">Tutte le categorie</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            </div>
          </form>
          <div className="cart-icon">
            <button class="cart-button">
              <Link to="/cart">
                <i class="fa fa-shopping-cart cart-icon"></i>
              </Link>
            </button>
          </div>
        </div>
      </header>
      <main>
        {searchResults.length > 0
          ? searchResults.map((product) => (
              <Product
                key={product.id}
                item={product}
                onAddToCart={handleAddToCart}
              />
            ))
          : products.map((product) => (
              <Product
                key={product.id}
                item={product}
                onAddToCart={handleAddToCart}
              />
            ))}
      </main>
    </div>
  );
}

export default App;
