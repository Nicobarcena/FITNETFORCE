import { useState } from "react";
export default function Contador () {
        const precioUnitario = 500;

        const [cantidad, setCantidad] = useState (0);

        function suma () {
            setCantidad(cantidad + 1);
        }

        function resta (){
        if (cantidad > 0) {

            setCantidad (cantidad - 1)
        }
    }

    return (
    <>
    <p>Precio unitario: ${precioUnitario} </p>
    <button onClick={resta}>-</button>
    <p>{cantidad}</p>
    <button onClick={suma} >+</button>

    <p>
        El Total es:$TOTAL 
    </p>
    </>
)

}