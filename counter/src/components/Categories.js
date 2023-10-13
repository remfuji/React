import { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([])
  // const [primaCategoria, setPrimaCategoria] = useState([]);

  useEffect(() => {
      async function get() {
          let response = await fetch('https://fakestoreapi.com/products/categories')
          let categories = await response.json()
          let result = categories.map(async (a) => {
            let iesimaCat = "https://fakestoreapi.com/products/category/" + a
            let fetchIesima = await fetch(iesimaCat)
            let products = await fetchIesima.json()
            return {name : a, products: products}
          })
          result = await Promise.all(result) 
          setCategories(result)
      }
      get()

  }, [])
  // useEffect(() => {
  //   async function getCate() {
  //     let response = await fetch(
  //       "https://fakestoreapi.com/products/category/electronics"
  //     );
  //     let categorie = await response.json();
  //     setPrimaCategoria(categorie);
  //   }
  //   getCate();
  // }, []);

  return (
    <>
      {/* <h1>Categories</h1>
        <ul>
          {
            categories.map(category => <li>{category}</li>)
          }
        </ul> */}

      
        {categories.map((category) => (
          <div>
            <h3>{category.name}</h3>
            <ul>
                {category.products.map((product) => <li>{product.title}</li>)}
            </ul>
          </div>
        ))}
      
    </>
  );
}
export default Categories;
