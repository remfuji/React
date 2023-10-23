import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';



export default function Product({ item, onAddToCart }) {
   
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <section className="product-list">
        <div className="product">
          <Slider {...sliderSettings}>
            {item.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Prodotto ${item.title}`} />
              </div>
            ))}
          </Slider>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span>{item.price}$</span>
          <button className="cart-btn " id="btn-product"onClick={() => onAddToCart(item)}>Aggiungi al carrello</button>
        </div>
      </section>
    );
  }
  