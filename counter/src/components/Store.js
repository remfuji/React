import { useState, useEffect } from "react";
import "./Store.css";
export default function Store() {
  return (
    <>
      <div className="container">
        <div className="products">
          <h5>Products</h5>
          <div className="card-item">
          <div className="image">
            <img src="https://picsum.photos/100" />
            </div>
            <div className="items-description">
              <div>title</div>
              <span>Price</span>
            </div>
          </div>
          <div className="card-item">
            <div className="image">
            <img src="https://picsum.photos/100" />
            </div>
            <div className="items-description">
              <div>Title</div>
              <span>Price</span>
            </div>
            <div className="btn">  
                <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="chart">
          <h5>Chart</h5>
        </div>
      </div>
    </>
  );
}
