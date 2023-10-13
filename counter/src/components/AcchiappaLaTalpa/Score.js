import { useState,useEffect } from "react";
import Hole from "./Hole";

export default function Score({score}){
   
    return(
        <>
            <div>
                <h6>Punteggio <span>{score}</span> </h6>
                
            </div>
        </>
    )
}