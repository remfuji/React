import { useState } from "react";

// tre inputbox 
//1. nome prodotto
//2. tipologia prodotto
//3. quantita'
// button onclick => aggiunge elemento alla pagina

export default function SmartFridge() {
    const [prodotto, setProdotto] = useState({
        nome : '',
        tipologia : '',
        numero : 0
    })
    const[prodotti,setProdotti] = useState([])
    
    function aggiornaNome(e){
        aggiorna('nome', e.target.value)
    }
    function aggiornaTipologia(e){
        aggiorna('tipologia', e.target.value)
    }
    function aggiornaNumero(e){
        aggiorna('numero', e.target.value)
    }
    function aggiungiProdotto(){
        let copia = JSON.parse(JSON.stringify(prodotti))
        copia.push(prodotto)
        setProdotti(copia)
        
    }

    // scrivo una funzione che accetta
    // 1) quale chiave devo modificare
    // 2) quale valore associero' a quella chiave
    // faccio la copia dello stato
    // associo la chiave al valore nello stato copiato
    // setto lo stato
    function aggiorna(chiave, valore){
        let copia = JSON.parse(JSON.stringify(prodotto))
        copia[chiave] = valore
        setProdotto(copia)

    }
   
    // function aggiornaProdotto(quale) {
    //     return function(e) {
    //         let copia = JSON.parse(JSON.stringify(prodotto))
    //         copia.quale = e.target.value
    //         copia[quale] = e.target.value
    //         setProdotto(copia)
    //     }
    // }

    // function aggiornaProdotto(quale, e) {
    //     let copia = JSON.parse(JSON.stringify(prodotto))
    //     copia.quale = e.target.value
    //     copia[quale] = e.target.value
    //     setProdotto(copia)
    // }
    // se invece volessi utilizzarla cosi senza la funzione che ritorna la funzione
    // <input type='text' onChange={(e) => aggiornaProdotto('nome', e)} />

    return (
        <>
        <input type='text' onChange={aggiornaNome}/>
        <input type='text' onChange={aggiornaTipologia}/>
        <input type= 'number' onChange={aggiornaNumero}/>
        <button onClick={aggiungiProdotto}>click</button>

        <div>
        {prodotti.map((p) => (
            <div>
                {p.nome} {p.tipologia} {p.numero}
            </div>
            ))}
        </div>
        </>
    )
}