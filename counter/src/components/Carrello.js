// collegare un elenco di prodotti a sx (dal link https://fakestoreapi.com/products)
// quando si aggiunge un prodotto al carrello, si inserisce a dx

import { useState, useEffect } from "react";

export default function Carrello() {
    const [item, setItem] = useState([])
    const [cart, setCart] = useState([])

    let totalPrice = 0
    totalPrice = cart.reduce((acc, curr) => acc + curr.price, totalPrice)

    useEffect(() => {
        async function get() {
            let response = await fetch("https://fakestoreapi.com/products")
            response = await response.json()
            setItem(response)
        }
        get()
    },)

    function buyItem(item) {
        let temp = [...cart]
        temp.push(item)
        setCart(temp)
    }

    function calcQuant(arr) {
        let res = []
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i]
            current.quantity = 1
            for (let j = (i+1); j < arr.length; j++) {
                let current2 = arr[j]
                if (current.id === current2.id) {
                    current.quantity += 1 
                }
            }
            if (!checkIfItemAlreadyPresent(res, current)) {
                res.push(current)
            }
            
        }
        return res
    }

    function checkIfItemAlreadyPresent(arr, item) {
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i]
            if (current.id === item.id) {
                return true
            } 
        }
        return false
    }

    const quantItems = calcQuant(cart)

    return (
        <>
            <div className="container">
                <div>
                    {item.map(item => <CardItem item={item} buyItem={() => buyItem(item)} />)}
                    {/* la map serve per partire da un array di oggetti e
                    restituire un elenco di elemento html */}
                </div>
                <div className="cart">
                    <h2>Cart</h2>
                    {quantItems.map(item => <div className="item">
                        <h3>{item.title}</h3>
                        <img src={item.image} alt="" />
                        <p>QuantitÃ : {item.quantity}</p>
                        <span>{item.price*item.quantity}$</span>
                    </div>)}
                    <br></br>
                    <span>Total price: {totalPrice}$</span>
                </div>
            </div>

        </>
    )

}

function CardItem({ item, buyItem }) {
    return (
        <>
            <div className="item">
                <h3>{item.title}</h3>
                <img src={item.image} alt="" />
                <span>{item.price}$</span>
                <button onClick={buyItem}>Buy</button>
            </div>
        </>
    )
}