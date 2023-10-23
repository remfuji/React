import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  const [cartItems, setCartItems] = useState(cart)

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return totalPrice;
  };

  const handleAddToCart = (productId) => {
    const productIndex = cartItems.findIndex((item) => item.id === productId);
      const updatedCart = [...cartItems];
      updatedCart[productIndex].quantity++;
      setCartItems(updatedCart);
    
  };

  const handleRemoveFromCart = (productId) => {
    const productIndex = cartItems.findIndex((item) => item.id === productId);
      const updatedCart = [...cartItems];
      if (updatedCart[productIndex].quantity) {
        updatedCart[productIndex].quantity--;
      } else {
        updatedCart.splice(productIndex, 1);
      }
      setCartItems(updatedCart);
    
  };

  return (
    <div>
      <div className="cart-header">
        <h2>Carrello</h2>
        <div>
          <button>
            <Link to={"/"}>Home</Link>
          </button>
        </div>
      </div>

      <div className="cart">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <h3>{item.title}</h3>
            <img className="cart-img" src={item.thumbnail} />
            <p>Quantità: {item.quantity}</p>
            <div>
              <button className="cart-btn" onClick={() => handleAddToCart(item.id)}>Aggiungi</button>
              <button className="cart-btn" onClick={() => handleRemoveFromCart(item.id)}>Rimuovi</button>
            </div>
            <span>{item.price * item.quantity}$</span>
          </div>
        ))}
      </div>

      <div>
        Totale:
        <span>
          <strong>{calculateTotalPrice()}$</strong>
        </span>
        <button >Compra</button>
      </div>
    </div>
  );
}

export default Cart;
